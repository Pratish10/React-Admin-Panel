import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCaretRight } from '@coreui/icons'

const pageSize = 5

const Charts = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const feedbackData = [
    {
      id: 1,
      datetime: '2023-09-14 & 23:02',
      name: 'Mark',
      number: 123,
      service: 'Service 1',
      therapist: 'Therapist 1',
      feedback: 'Good',
    },
    {
      id: 2,
      datetime: '2023-09-15 & 14:30',
      name: 'Jane',
      number: 456,
      service: 'Service 2',
      therapist: 'Therapist 2',
      feedback: 'Excellent',
    },
    {
      id: 3,
      datetime: '2023-09-16 & 10:15',
      name: 'Alice',
      number: 789,
      service: 'Service 3',
      therapist: 'Therapist 3',
      feedback: 'Very satisfied',
    },
    {
      id: 4,
      datetime: '2023-09-17 & 09:00',
      name: 'Bob',
      number: 101,
      service: 'Service 4',
      therapist: 'Therapist 4',
      feedback: 'Pleasant experience',
    },
    {
      id: 5,
      datetime: '2023-09-18 & 16:45',
      name: 'Eve',
      number: 202,
      service: 'Service 5',
      therapist: 'Therapist 5',
      feedback: 'Great job!',
    },
    {
      id: 6,
      datetime: '2023-09-19 & 11:30',
      name: 'David',
      number: 303,
      service: 'Service 6',
      therapist: 'Therapist 6',
      feedback: 'Excellent service',
    },
    {
      id: 7,
      datetime: '2023-09-20 & 14:00',
      name: 'Sarah',
      number: 404,
      service: 'Service 7',
      therapist: 'Therapist 7',
      feedback: 'Top-notch',
    },
    {
      id: 8,
      datetime: '2023-09-21 & 12:45',
      name: 'Michael',
      number: 505,
      service: 'Service 8',
      therapist: 'Therapist 8',
      feedback: 'Very professional',
    },
    {
      id: 9,
      datetime: '2023-09-22 & 17:30',
      name: 'Lisa',
      number: 606,
      service: 'Service 9',
      therapist: 'Therapist 9',
      feedback: 'Outstanding',
    },
    {
      id: 10,
      datetime: '2023-09-23 & 19:20',
      name: 'Chris',
      number: 707,
      service: 'Service 10',
      therapist: 'Therapist 10',
      feedback: 'Very happy with the service',
    },
  ]

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  const displayedFeedback = feedbackData.slice(startIndex, endIndex)

  return (
    <CCard>
      <CCardHeader>Feedback</CCardHeader>
      <CCardBody>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell></CTableHeaderCell>
              <CTableHeaderCell>Date & Time</CTableHeaderCell>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Number</CTableHeaderCell>
              <CTableHeaderCell>Service</CTableHeaderCell>
              <CTableHeaderCell>Therapist</CTableHeaderCell>
              <CTableHeaderCell>FeedBack</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {displayedFeedback.map((feedback) => (
              <CTableRow key={feedback.id}>
                <CTableHeaderCell>
                  <CIcon style={{ color: 'blue' }} icon={cilCaretRight} />
                </CTableHeaderCell>
                <CTableDataCell>{feedback.datetime}</CTableDataCell>
                <CTableDataCell>{feedback.name}</CTableDataCell>
                <CTableDataCell>{feedback.number}</CTableDataCell>
                <CTableDataCell>{feedback.service}</CTableDataCell>
                <CTableDataCell>{feedback.therapist}</CTableDataCell>
                <CTableDataCell style={{ lineHeight: '1.5', marginBottom: '10px' }}>
                  <p>{feedback.feedback}</p>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
        <br />
        <CPagination align="end" aria-label="Page navigation example">
          <CPaginationItem
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ cursor: 'pointer' }}
          >
            Previous
          </CPaginationItem>
          {[...Array(Math.ceil(feedbackData.length / pageSize))].map((_, index) => (
            <CPaginationItem
              key={index}
              active={index + 1 === currentPage}
              onClick={() => setCurrentPage(index + 1)}
              style={{ cursor: 'pointer' }}
            >
              {index + 1}
            </CPaginationItem>
          ))}
          <CPaginationItem
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(feedbackData.length / pageSize)}
            style={{ cursor: 'pointer' }}
          >
            Next
          </CPaginationItem>
        </CPagination>
      </CCardBody>
    </CCard>
  )
}

export default Charts
