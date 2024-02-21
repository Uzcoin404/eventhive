import Link from "next/link";
import Button from "./button";
import Container from "./container";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <div className="toolbar flex justify-between">
          <Link href={"/"} className="text-40 font-bold">Event <span className="text-primary">Hive</span></Link>

          <div className="flex">
            <Button link="#" type="outlined" className="mr-2">Login</Button>
            <Button link="#">Signup</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
