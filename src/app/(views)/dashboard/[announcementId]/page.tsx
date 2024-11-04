

import React from 'react'

const AnnouncementPage = async ({params}: {params: {announcementId: string}}) => {
  return (
    <div>AnnouncementPage {params.announcementId}</div>
  )
}

export default AnnouncementPage