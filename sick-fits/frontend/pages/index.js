import Link from "next/link";

const Home = props => (
  <div>
    <p>Home Pup!</p>
    <Link href="/sell">
      <a>Sell Stuff!</a>
    </Link>
  </div>
)

export default Home;
