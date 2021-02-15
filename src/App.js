import work from './images/workInProgress.gif';
import './App.css';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiGithubLine } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={work} id="work" className="App-logo" alt="Work In Progress" />
				<h2>Meanwhile reach me out at: </h2>
				<div className="sc">
					<a aria-label="Twitter" href="https://twitter.com/kuma_r_ahul">
						<AiOutlineTwitter id="twitter" className="icon" />
					</a>
					<a aria-label="linkedIn" href="https://www.linkedin.com/in/kumarahul98/">
						<FaLinkedinIn id="linkedIn" className="icon" />
					</a>
					<a aria-label="Github" href="https://github.com/kumarahul98">
						<RiGithubLine id="gitHub" className="icon" />
					</a>
					<a aria-label="Instagram" href="https://www.instagram.com/kumarahul98/">
						<AiOutlineInstagram id="intagram" className="icon" />
					</a>
					<a aria-label="WhatsApp" href="https://wa.me/+917019046050">
						<AiOutlineWhatsApp id="whatsApp" className="icon" />
					</a>
				</div>
			</header>
		</div>
	);
}

export default App;
