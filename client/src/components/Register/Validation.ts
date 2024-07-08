const isValidEmail=(email:string)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export const ValidationUserPage=(employee:any,allUser:any)=>{
    const checkEmail=(email:any)=>{
        const findObj=allUser.findIndex((e:any)=>{
            return email===e.email;
        });
        if(findObj==-1){
            return true;
        }
        return false;
    }
    const errors={
        nameAccount:'',
        password:'',
        email:'',
        authPassword:'',
    }
    
    const {nameAccount,password,email,authPassword}=employee;
    console.log(password.length);
    if(nameAccount===''){
        errors.nameAccount='Tên tài khoản ko đc để trống';
    }
    if(email===''){
        errors.email='Email ko đc để trống';
    }else if(!isValidEmail(email)){
       errors.email='Email ko hợp lệ';
    }else if(!checkEmail(email)){
        errors.email='Email đã tồn tại trong hệ thống'
    }
    if(password===''){
        errors.password='Mật khẩu ko đc để trống';
    }else if(password.length<=7){
        errors.password='Mật khẩu của bạn quá ngắn';
    }
    if(authPassword==''){
        errors.authPassword='Xác nhận mật khẩu ko đc để trống'
    }else if(authPassword!==password){
        errors.authPassword='Mật khẩu xác nhận bị sai'
    }
    return errors;
}