// Libraries
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

@connect((store) => {
    return {
      active_language : store.app.active_language, 
    };
})

class Portfolio extends React.Component {
	constructor(props){
		super(props);

	}

	render(){
		let { active_language }	= this.props;
		return (
		<div id='portfolio'>
		      	<h1 class='title'>{ active_language=='ind' ? "Portofolio" : "Portfolio" }</h1>
		      	<h4>1. PIGO, FOOD AND BEVERAGE COMPANY - SIDOARJO </h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk <i>burner</i> dan aktifitas pemrosesan</h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 200m3/jam</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
				      	<h5>Supply CNG for supporting burner and process activity</h5>
				      	<h5>Design and Installation of PRS for 200 m3/hour</h5>
		      		</div>
		      	}

		      	<h4>2. PT. SENTOSA ALLOY, ALUMINIUM CASTING ALUMUNIUM - SIDOARJO</h4>

				{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk tungku dan aktifitas <i>casting</i></h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 300m3/jam</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
				      	<h5>Supply CNG for supporting furnace and molding activity</h5>
						<h5>Design and installation of PRS for 300 m3/hour</h5>
		      		</div>
		      	}

		      	<h4>3. PT. AMERTA INDAH OTSHUKA, FOOD AND BEVERAGE COMPANY - PASURUAN</h4>
				{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk turbin gas dan aktifitas pemrosesan</h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 1500m3/jam dengan pemasangan pipa eksternal dan internal</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
				      	<h5>Supply CNG for supporting gas turbin and process activity</h5>
						<h5>Design and installation of PRS for 1500 m3/hour, including internal & external piping</h5>
		      		</div>
		      	}		      	

				<h4>4. PT. SINAR KENCANA AGUNG 1, FOOD AND BEVERAGE COMPANY - MALANG</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk <i>burner</i> dan aktifitas pemrosesan</h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 700m3/jam</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Supply CNG for supporting burner and process activity</h5>
						<h5>Design and installation of PRS for 700 m3/hour</h5>
		      		</div>
		      	}				

				<h4>5. CV. PIONIR MANDIRI JAYA, WATER TANK COMPANY - GRESIK</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk <i>burner</i> dan aktifitas pemrosesan</h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 300m3/jam</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Supply CNG for supporting burner and process activity</h5>
						<h5>Design and installation of PRS for 300 m3/hour</h5>
		      		</div>
		      	}	

				<h4>6. CV. SAMUDERA, GLASS COMPANY - KUDUS</h4>
				{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk tungku dan aktifitas <i>casting</i></h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 1000m3/jam dengan pemasangan pipa eksternal dan internal</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
				      	<h5>Supply CNG for supporting furnace and process activity</h5>
						<h5>Design and installation of PRS for 1000 m3/hour, including internal and external piping</h5>
		      		</div>
		      	}	

				<h4>7. FRIEND’S BAKERY FOOD AND BEVERAGE COMPANY - SIDOARJO</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk <i>burner</i> dan aktifitas pemrosesan</h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 200m3/jam dengan sistem <i>tube buffering</i></h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Supply CNG for supporting burner and process activity</h5>
						<h5>Design and installation of PRS for 200 m3/hour, including including tube buffering system</h5>
		      		</div>
		      	}	

				<h4>8. CV. AMANDA, FOOD AND BEVERAGE COMPANY - BANDUNG</h4>
				{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk <i>boiler</i>, <i>steamer</i>, oven, <i>burner</i>, dan aktifitas pemrosesan</h5>
				      	<h5>Desain dan instalasi PRS menggunakan sistem <i>heat exchanger</i> dengan kapasitas 1000m3/jam termasuk pemasangan pipa eksternal dan internal</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Supply CNG for supporting boiler, steamer, oven, burner, and process activity</h5>
						<h5>Design and installation of PRS using heat exchanger system for 1000 m3/hour including internal & external piping</h5>
		      		</div>
		      	}	

				<h4>9. PT. ALTINEX, CONSUMABLE PRODUCT COMPANY - BANDUNG</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk <i>burner</i> dan aktifitas pemrosesan</h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 700m3/jam</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
				      	<h5>Supply CNG for supporting burner and process activity</h5>
				      	<h5>Design and Installation of PRS for 700 m3/hour</h5>
		      		</div>
		      	}
				
				<h4>10. CV AMANDA, FOOD AND BEVERAGE COMPANY - JOGJAKARTA</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk <i>burner</i> dan aktifitas pemrosesan</h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 200m3/jam</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
				      	<h5>Supply CNG for supporting burner and process activity</h5>
				      	<h5>Design and Installation of PRS for 200 m3/hour dengan sistem <i>tube buffering</i></h5>
		      		</div>
		      	}

				<h4>11. ROEMAH TELO, FOOD AND BEVERAGE COMPANY, SIDOARJO</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk <i>burner</i> dan aktifitas pemrosesan</h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 200m3/jam</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
				      	<h5>Supply CNG for supporting burner and process activity</h5>
				      	<h5>Design and Installation of PRS for 200 m3/hour dengan sistem <i>tube buffering</i></h5>
		      		</div>
		      	}

				<h4>12. PT SINAR KENCANA AGUNG 2, FOOD AND BEVERAGE COMPANY - MALANG</h4>
				{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk <i>boiler</i>, oven, <i>burner</i>, dan aktifitas pemrosesan</h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 1000m3/jam termasuk pemasangan pipa eksternal dan internal</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Supply CNG for supporting boiler, oven, burner, and process activity</h5>
						<h5>Design and installation of PRS for 1000 m3/hour including internal & external piping</h5>
		      		</div>
		      	}	

				<h4>13. PT PERHUTANI ANUGERAH KIMIA, CHEMICAL PRODUCT</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok CNG untuk <i>burner</i> dan aktifitas pemrosesan</h5>
				      	<h5>Desain dan instalasi PRS dengan kapasitas 700m3/jam termasuk dengan pemasangan pipa eksternal dan internal</h5>
				      	<h5>Modifikasi <i>burner</i> menjadi <i>burner</i> dengan bahan bakar ganda (gas dan minyak)</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
				      	<h5>Supply CNG for supporting burner and process activity</h5>
				      	<h5>Design and Installation of PRS for 700 m3/hour including internal & external piping</h5>
				      	<h5>Oil burner modification to dual fuel burner (gas and oil burner)</h5>
		      		</div>
		      	}

				<h4>14. PT. RIYOSO, ENGINEERING AND CONSTRUCTION COMPANY</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Memasok sistem metering gas</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Supply gas metering system</h5>
		      		</div>
		      	}

				<h4>15. PT. PRASTIWAHYU TRIMITRA ENGINEERING</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
				      	<h5>Mendukung perbaikan operasi dan melakukan <i>maintenance</i> pada <i>diesel power plant</i> di Tanjung Pinang</h5>
				      	<h5>Melakukan pekerjaan elektrikal dan mekanikal</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Support improvement of operation and maintenance for diesel power plant at Tanjung Pinang</h5>
						<h5>Mechanical and electrical works</h5>
		      		</div>
		      	}
				<h4>16. PT. PABRIK GONDORUKEM & TERPENTIN - SUKUN, PONOROGO</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
		      			<h5>Pemasangan PRS, sistem kelistrikan dan sistem instrument</h5>
		      			<h5>Sistem meter dan <i>burner</i> gas untuk <i>boiler</i></h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Pressure reduction system, electrical system, and instrument system installation</h5>
						<h5>Metering system & gas burner for boiler</h5>
		      		</div>
		      	}
				<h4>17. PT. PABRIK GONDORUKEM & TERPENTIN - GARAHAM, JEMBER</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
		      			<h5>Pemasangan PRS, sistem kelistrikan dan sistem instrument</h5>
		      			<h5>Sistem meter dan <i>burner</i> gas untuk <i>boiler</i></h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Pressure reduction system, electrical system, and instrument system installation</h5>
						<h5>Metering system & gas burner for boiler</h5>
		      		</div>
		      	}
				<h4>18. PT. PABRIK GONDORUKEM & TERPENTIN - TRENGGALEK</h4>
		      	{
		      		active_language == 'ind' && 
		      		<div>
		      			<h5>Pemasangan PRS, sistem kelistrikan dan sistem instrument</h5>
		      			<h5>Sistem meter dan <i>burner</i> gas untuk <i>boiler</i></h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Pressure reduction system, electrical system, and instrument system installation</h5>
						<h5>Metering system & gas burner for boiler</h5>
		      		</div>
		      	}
				<h4>19. PT. RIAU GREEN ENERGY - RIAU</h4>
				{
		      		active_language == 'ind' && 
		      		<div>
						<h5>Konsultan pendamping (owner consultant) PLTBM A x 10 MW</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Consulting for PLTBM Ax10MW</h5>
		      		</div>
		      	}
				<h4>20. PT. PLN (PERSER0) - JAKARTA</h4>
				{
		      		active_language == 'ind' && 
		      		<div>
						<h5>Pemasangan kubikel CBO/LBS/PB di kawasan Mega Kuningan</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>CBO/LBS/PB cubicle installation in Mega Kuningan</h5>
		      		</div>
		      	}

				<h4>21. PT. CIKARANG LISTRIKINDO TBK - CIKARANG</h4>
				{
		      		active_language == 'ind' && 
		      		<div>
						<h5>Fabrikasi dan instalasi busbar panel 15.000 A 104 KA di PLTU Cikarang Listrikindo Babelan Project</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
						<h5>Busbar Panel 15.000 A 104KA Fabrication and installation at PLTU Cikarang Listrikindo Babelan Project</h5>
		      		</div>
		      	}
				<h4>22. DIREKTORAT JENDERAL PAJAK - JAKARTA</h4>
				{
		      		active_language == 'ind' && 
		      		<div>
						<h5>Proyek Pembangunan Permanent Power House</h5>
		      		</div>
		      	}

		      	{
		      		active_language == 'eng' && 
		      		<div>
		      			<h5>Permanent Power House Construction Project</h5>
		      		</div>
		      	}
		    </div>
		)
	}
}

export default Portfolio;