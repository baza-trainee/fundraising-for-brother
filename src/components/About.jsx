import aboutImg from '../assets/about-brigade/about-image.webp';
import aboutImgMob from '../assets/about-brigade/about-imageMob.webp';
import logo from '../assets/about-brigade/logoAbout.svg';

const About = () => {
	return (
		<section className="block w-[90vw] max-w-4xl mx-auto md:w-full ">
			<div className='flex items-center gap-2.5 mb-5 sm:gap-5 mb-14'>
				<h2 className='text-3xl font-semibold text-neutral-700 sm:text-7xl'>Про бригаду</h2> 
				<img className='h-10 sm:h-28' src={logo} alt='logo' />
			</div>
			<div className='flex flex-col  gap-3 md:items-center md:flex-row py-5 text-sm text-white rounded sm:rounded-lg px-2 md:pl-5 md:pr-2.5 md:pt-10 md:pb-6 sm:text-base sm:leading-6 bg-lime-900 '>
				<p className='md:hidden '>Бійці 118-ї окремої механізованії бригади беруть участь у бойових діях на Запорізькому напрямку. У липні 118 ОМБр спільно із іншими бригадами прорвали оборону в районі Роботине.</p>			
					<img className='object-contain' src={aboutImg} alt="aboutImg" />
				<div className='flex flex-col gap-5 '>
					<p className='hidden md:block '>Бійці 118-ї окремої механізованії бригади беруть участь у бойових діях на Запорізькому напрямку. У липні 118 ОМБр спільно із іншими бригадами прорвали оборону в районі Роботине.</p>
					<p className=''>Головна мета підрозділу радіоелектронної розвідки — добування розвідувальних відомостей про противника шляхом перехоплення і аналізу випромінювань його радіоелектронних засобів з застосуванням спеціальних технічних пристроїв.</p>
					<p className='hidden md:block'>Радіоелектронна розвідка є найважливішою частиною державної та воєнної розвідки різних країн і являє собою основний, а в багатьох випадках, єдиний спосіб добування розвідувальної інформації. За різними оцінками засобами РЕР добувається 80-90% первинної інформації</p>
				</div>
			</div>
		</section>
	);
};

export default About;