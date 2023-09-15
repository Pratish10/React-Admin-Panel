import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CButton,
  CContainer,
  CRow,
  CCol,
  CAlert,
} from '@coreui/react'
import { DocsLink } from 'src/components'

const Charts = () => {
  const [formData, setFormData] = useState([{ id: 1 }])
  const [alert, setAlert] = useState(false)

  const handleAddInput = () => {
    const newId = formData.length + 1

    setFormData([...formData, { id: newId }])
  }

  const handleRemoveInput = (id) => {
    const newFormData = formData.filter((item) => item.id !== id)
    setFormData(newFormData)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setAlert(true)
  }

  return (
    <CCard>
      {alert && (
        <CAlert color="success" closeButton onShowChange={() => setAlert(false)}>
          Form submitted successfully!
        </CAlert>
      )}
      <CCardHeader>
        Add Data
        <DocsLink text="Save E-Dial" />
      </CCardHeader>

      <br />
      <CContainer>
        {formData.map((rowData) => (
          <div key={rowData.id} style={{ marginBottom: '30px' }}>
            <CRow xs={{ cols: 7 }}>
              <CCol>
                <CForm>
                  <CFormInput
                    type="email"
                    id={`name-${rowData.id}`}
                    label="Name"
                    placeholder="Enter your name"
                  />
                </CForm>
              </CCol>
              <CCol>
                <CForm>
                  <CFormInput
                    type="number"
                    id={`number-${rowData.id}`}
                    label="Number"
                    placeholder="Enter your number"
                  />
                </CForm>
              </CCol>
              <CCol>
                <CForm>
                  <CFormInput
                    type="text"
                    id={`branch-${rowData.id}`}
                    label="Branch"
                    placeholder="Enter your branch"
                  />
                </CForm>
              </CCol>
              <CCol>
                <CForm>
                  <CFormInput
                    type="date"
                    id={`date-${rowData.id}`}
                    label="Date"
                    placeholder="Enter your date"
                  />
                </CForm>
              </CCol>
              <CCol>
                <CForm>
                  <CFormInput
                    type="text"
                    id={`service-${rowData.id}`}
                    label="Service"
                    placeholder="Enter your service"
                  />
                </CForm>
              </CCol>
              <CCol>
                <CForm>
                  <CFormInput
                    type="text"
                    id={`therapist-${rowData.id}`}
                    label="Therapist"
                    placeholder="Enter your therapist"
                  />
                </CForm>
              </CCol>

              <CCol>
                <CButton
                  color="danger"
                  style={{ marginTop: '30px' }}
                  onClick={() => handleRemoveInput(rowData.id)}
                >
                  Delete Row
                </CButton>
              </CCol>
            </CRow>
          </div>
        ))}
      </CContainer>
      <CCardBody>
        <CButton color="primary" onClick={handleAddInput}>
          Add Row
        </CButton>
      </CCardBody>
      <CCardBody>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CButton color="primary" onClick={submitHandler}>
            Submit
          </CButton>
        </div>
      </CCardBody>
    </CCard>
  )
}

export default Charts
