import Meta from "../components/Meta";
import Wrapper from "../components/prebuilt/Wrapper";
import Nav from "../components/prebuilt/Nav";
import Image from "next/image";
import doodle from "../public/doodle.png";
import Button from "../components/prebuilt/Button";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Project from "../components/Project";
import Origin from "../components/Origin";
import Lemonbg from "../components/Lemonbg";
import Footer from "../components/Footer";

import logo from "../public/logo.png";

export default function Home() {
	return (
		<>
			<Meta
				title='LemonNoodles - 7,777 Supply'
				desc='7,777 LemonNoodles on the ETH chain'
			/>
			<Lemonbg />
			<Nav position='fixed' />
			<div className='container'>
				<div className='md:grid-cols-2 grid h-screen gap-12'>
					<div className='flex-center flex-col'>
						<div className='img lg:w-3/4 mx-aut'>
							<Image src={doodle} alt='Lemon Doodle' />
						</div>
					</div>
					<div className='flex-center flex-col'>
						<div>
							<Image src={logo} alt='Lemon Noodles NFT' />
							{/* <h1 className='font-skrap mb-6 text-6xl text-black'>
								LEMON NOODLES
							</h1> */}
							<p className='mx-auto text-2xl text-center'>
								7,777 NFTs - .035 ETH
							</p>
							<Button text='MINTING SOON' />
						</div>
					</div>
				</div>
			</div>

			<Wrapper>
				<Project />
			</Wrapper>

			<Wrapper>
				<Origin />
			</Wrapper>

			<Wrapper className='bg-lemon'>
				<Team />
			</Wrapper>

			<Wrapper className='bg-mint'>
				<FAQ />
			</Wrapper>

			<Footer />
		</>
	);
}
