import React from 'react'
import { Modal, Button, Form, Container } from 'react-bootstrap'

const SignUpmodel = ({ show, onHide }) => { //Container 쓰는 건 여백을 만들기 위해서
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>


        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"> {/*로그인 창 상단 바*/}
            회원가입
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> {/*로그인 중간 바*/}
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>닉네임</Form.Label>
              <Form.Control type="email" placeholder="닉네임 입력하세요." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>아이디</Form.Label>
              <Form.Control type="email" placeholder="아이디 입력하세요." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="비밀번호 입력하세요." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer> {/*로그인 창 하단 바*/}
          <Button variant='primary' type='button'>
            submit
          </Button>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Container>
    </Modal>

  )
}

export default SignUpmodel