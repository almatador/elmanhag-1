import React, { useContext, useEffect, useState } from 'react'
import { ChapterContext } from '../../../../Layouts/Admin/ChapterSubjectLayout'

const ChapterSubjectPage = () => {
  const [chapterContent, setChapterContent] = useState({})
  const [chapterName, setChapterName] = useState('')

  const ChapterData = useContext(ChapterContext)

  useEffect(() => {

    if (ChapterData) {
      setChapterContent(ChapterData)
      setChapterName(ChapterData?.name || '')
    }
  }, [ChapterData])
  return (
    <>
      {/* {chapterContent} */}
      {chapterName}
      <div>ChapterSubjectPage</div>
    </>
  )
}

export default ChapterSubjectPage