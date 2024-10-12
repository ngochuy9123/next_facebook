import style from "@/styles/Login.module.scss";
import Footer from "@/components/login/Footer";
import LoginForm from "@/components/login/LoginForm";
import RegisterForm from "@/components/login/RegisterForm";

const Layout = () => {
  return (
    <div className={style.login}>
      <div className={style.login_wrapper}>
        <LoginForm />

        <RegisterForm />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
