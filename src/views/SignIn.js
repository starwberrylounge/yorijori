import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'components/KakaoLogin';
import { Button, FormGroup, FormText, Input, Label } from 'reactstrap';
 
function Login() {
    // 함수형 컴포넌트에서 state를 사용하기위해 useState 사용
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
    // input 태그에 value={값} 선언하면 readonly같은 효과가 나타나므로
    // onChange로 변화가 있을때마다 id의 값을 변경해줍니다.
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    // 마찬가지
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    
    //구글로그인 성공 시
    const loginGoogle = (res) =>{
        console.log(res.profileObj.email)
        console.log(res.profileObj.name)
        console.log(res.profileObj.googleId)
        // 메일 주소, DB 비교 컴포넌트 props 메일주소 
        const loginInfo={
            member_email:res.profileObj.email,
            member_name:res.profileObj.name,
            member_idKey:res.profileObj.googleId
        }
        // axios를 이용해 post로 전송하며
        axios.post('/socialLogin.do', loginInfo, {
            headers:{
                // json으로 형식을 지정함.
                "Content-type":"application/json"
            }
        })
         // post 보내고 나서 실행
        .then(res => {
    
            console.log(res)
            console.log('res.data.socialIdKey :: ', res.data.socialIdKey)
            console.log('res.data.chk :: ', res.data.chk)
            if (res.data.chk === 0){
                console.log('======================',res.data.msg)
                alert('가입한 기록이 없습니다. 회원가입을 진행해주세요.')
                document.location.href = `/signup/${loginInfo.member_email}/${loginInfo.member_name}/${loginInfo.member_idKey}`
            } else if(res.data.chk === 1) {
                console.log('======================','로그인 성공')
                sessionStorage.setItem('member_idKey', res.data.socialIdKey)
                alert('로그인 성공')
                document.location.href = '/'
            }
        })
        // 실패시 실행
        .catch()
    }

    // 구글 로그인 실패 시
    const failGoogle = () =>{
        
    }

    const loginkakao = (res) =>{
        console.log(res)
    }

    //로그인 함수
    const onClickLogin = () => {
        console.log('click login')
        console.log('ID : ', inputId)
        console.log('PW : ', inputPw)
        // json처럼 선언해줍니다.
        const loginInfo={
            member_id:inputId,
            member_pw:inputPw
        }
        // axio를 이용해 post로 전송하며
        axios.post('/login.do', loginInfo, {
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"application/json"
            }
        })
        // post 보내고 나서 실행
        .then(res => {
            
            console.log(res)
            console.log('res.data.member_id :: ', res.data.member_id)
            console.log('res.data.member_pw :: ', res.data.member_pw)
            // 아이디가 일치할경우는 res에서 값을 모두 받아오고
            // 아이디가 맞지않거나 비밀번호가 맞지않으면 둘다 undefined 나와요.
            if(res.data.member_id === undefined){
                // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                console.log('======================',res.data.msg)
                alert('입력하신 id 가 일치하지 않습니다.')
            } else if(res.data.member_pw === undefined){
                // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
                console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
                alert('입력하신 비밀번호 가 일치하지 않습니다.')
            } else if(res.data.member_id === inputId) {
                // id, pw 모두 일치 userId = userId1, msg = undefined
                console.log('======================','로그인 성공')
                sessionStorage.setItem('user_id', inputId)
                alert('로그인 성공')
            }
            // 작업 완료 되면 페이지 이동(새로고침)
            document.location.href = '/'
        })
        // 실패시 실행
        .catch()
    }
    // ?? 아직잘모르겠어요
     useEffect(() => {
         axios.get('/user_inform/login')
         .then(res => console.log(res))
         .catch()
     },[])
 
    return(
        <div>
            <form>
                <FormGroup>
                    <Label for="exampleEmail">Email address</Label>
                    <Input
                        type='email' name='input_id' value={inputId} onChange={handleInputId} placeholder="아이디" 
                    />
                    <FormText color="muted">
                    We'll never share your email with anyone else.
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type='password' name='input_pw' value={inputPw} onChange={handleInputPw} placeholder="비밀번호"
                        autoComplete="off"
                    />
                </FormGroup>
                <GoogleLogin onSuccess={loginGoogle} onFailure={failGoogle}/>
                <KakaoLogin onSuccess={loginkakao} />
                <Button color="primary" type="submit">
                    Submit
                </Button>
            </form>
            <h2>Login</h2>
           
            <div>
                <input />
            </div>
            <div>
                <input  />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}
 
export default Login;