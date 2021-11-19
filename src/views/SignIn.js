import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
    const onClickLogin = () => {
        console.log('click login')
        console.log('ID : ', inputId)
        console.log('PW : ', inputPw)
        const loginInfo={
            member_id:inputId,
            member_pw:inputPw
        }
        axios.post('/login.do', loginInfo, {
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(res => {
            console.log(res)
            console.log('res.data.member_id :: ', res.data.member_id)
            console.log('res.data.msg :: ', res.data.msg)
            if(res.data.member_id === undefined){
                // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                console.log('======================',res.data.msg)
                alert('입력하신 id 가 일치하지 않습니다.')
            } else if(res.data.member_id === null){
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
        .catch()
    }
 
     useEffect(() => {
         axios.get('/user_inform/login')
         .then(res => console.log(res))
         .catch()
     },[])
 
    return(
        <div>
            <h2>Login</h2>
            <div>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} placeholder="아이디" />
            </div>
            <div>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} placeholder="비밀번호" />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}
 
export default Login;