import React, { useEffect, useState } from 'react';
import './Register.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ValidationUserPage } from './Validation';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, getAllUsers } from '../../store/reducers/usersReducer';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase/firebase_config';
export default function Register() {
  const dispatch = useDispatch();
  const allUsers: any = useSelector((state: any) => state.users.allUsers);
  const [user, setUser]: any = useState({ nameAccount: '', email: '', password: '', authPassword: '', active: false, roles: 'user', block: false, img: '' });
  const [errors, setErrors]: any = useState({ nameAccount: '', email: '', password: '', authPassword: '' });
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const currentError = ValidationUserPage(user, allUsers);
    setErrors(currentError);
    if (currentError.nameAccount === '' && currentError.email === '' && currentError.password === '' && currentError.authPassword === '') {
      const { authPassword, ...others } = user;
      dispatch(addUsers(others));
      navigate('/page/login', { state: user });
    }
  };
  return (
    <form className='register_form'>
      <h3 className='register-form-heading'>Đăng ký</h3>
      <div className='register-form-group'>
        <div className="register-form-item">
          <input type="text" placeholder='Tên tài khoản' value={user.nameAccount} name='nameAccount' onChange={handleChangeInput} />
          {errors.nameAccount && <div className='message_error'>{errors.nameAccount}</div>}
        </div>
        <div className="register-form-item">
          <input type="text" placeholder='Email' value={user.email} name='email' onChange={handleChangeInput} />
          {errors.email && <div className='message_error'>{errors.email}</div>}
        </div>
        <div className='register-form-item'>
          <input type="password" placeholder='Mật khẩu' value={user.password} name='password' onChange={handleChangeInput} />
          {errors.password && <div className='message_error'>{errors.password}</div>}
        </div>
        <div className='register-form-item'>
          <input type="password" placeholder='Xác nhận lại mật khẩu' value={user.authPassword} name='authPassword' onChange={handleChangeInput} />
          {errors.authPassword && <div className='message_error'>{errors.authPassword}</div>}
        </div>
      </div>
      <div className='register-btn-item'>
        <button className='register_btn' onClick={handleSubmit}>Đăng ký</button>
      </div>
      <div className='bottom_register'>
        <div className='top_bottom_register'>
          <div className='bottom-line'></div>
          <div className='or'><h4>Hoặc</h4></div>
        </div>
        <div className='center_bottom_register'>
          <div>
          </div>
        </div>
        <div className='bottom_bottom_register'>Bạn đã có tài khoản trên Shopee? <Link className='to_login_page' style={{ color: 'orange' }} to='/page/login'>Đăng nhập</Link></div>
      </div>
    </form>
  );
}
