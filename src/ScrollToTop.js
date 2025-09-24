import React from 'react'
import { useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const SCROLL_STORAGE_KEY = 'scrollPositions'

// Загружаем сохранённые скроллы из localStorage
let scrollPositions = new Map(
  JSON.parse(localStorage.getItem(SCROLL_STORAGE_KEY) || '[]')
)

const ScrollToTop = () => {
  // есть вариант с map, а не только с history
  const { pathname } = useLocation()
  const navigationType = useNavigationType() // "POP" | "PUSH" | "REPLACE"

  // Восстановление скролла при рендере
  useLayoutEffect(() => {
    if (navigationType === 'POP' && scrollPositions.has(pathname)) {
      window.scrollTo(0, scrollPositions.get(pathname))
    } else {
      window.scrollTo(0, 0) // переход через меню или новый PUSH
    }
  }, [pathname, navigationType])

  // Сохраняем скролл при уходе со страницы и при обновлении
  useLayoutEffect(() => {
    const saveScroll = () => {
      scrollPositions.set(pathname, window.scrollY)
      localStorage.setItem(
        SCROLL_STORAGE_KEY,
        JSON.stringify([...scrollPositions])
      )
    }

    window.addEventListener('beforeunload', saveScroll) // F5 или закрытие вкладки
    return () => {
      saveScroll() // уход с текущей страницы
      window.removeEventListener('beforeunload', saveScroll)
    }
  }, [pathname])
  return null
}

export default ScrollToTop
