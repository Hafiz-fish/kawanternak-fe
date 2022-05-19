import { Link } from "react-router-dom";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <h1 className="text-sm">Beranda</h1>
      <p className="mt-1 text-xs text-gray-200">
        This information will be displayed publicly so be careful what you
        share.
      </p>
      <Link to="/login"> Login aja </Link>
      <Link to="/register"> Daftar aja </Link>
      <Link to="/product"> Lihat produk </Link>
    </>
  );
}
