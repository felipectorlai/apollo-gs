import Account from "@/Components/account";
import '../styles/components/page.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/Components/footer";

export default function Home() {
  return (
    <>
      <Account/>
      <Footer/>
    </>
  );
}