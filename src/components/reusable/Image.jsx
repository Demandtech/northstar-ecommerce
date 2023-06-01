import React, { useEffect, useRef } from 'react'

const Image = ({ srcList, alt }) => {
  const imageRefs = useRef([])

  console.log(imageRefs)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageRef = imageRefs.current.find((ref) => {
              ref.src === '' && ref.dataset.src
            })
            if (imageRef) {
              imageRef.src = imageRef.dataset.src
              observer.unobserve(imageRef)
            }
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    imageRefs.current.forEach((ref) => {
      observer.observe(ref)
    })
    return () => {
      imageRefs.current.forEach((ref) => {
        observer.unobserve(ref)
      })
    }
  }, [srcList])

  console.log(srcList)
  return (
    <div>
      {srcList.map((src, index) => (
        <img
          rel={(el) => (imageRefs.current[index] = el)}
          key={index}
          src=''
          alt={alt}
          data-src={src}
        />
      ))}
    </div>
  )
}

export default Image
