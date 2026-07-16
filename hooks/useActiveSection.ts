// hooks/useActiveSection.ts
'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // Change state if the section occupies at least 50% of the viewport
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const options = {
      root: null, // defaults to viewport
      rootMargin: '0px',
      threshold: [0.2, 0.5, 0.8], // Triggers at different visibility levels
    }

    const observer = new IntersectionObserver(callback, options)

    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
