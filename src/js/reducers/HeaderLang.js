export default function reducer(state={
    nav1 		: "Beranda",
    nav2 		: "Tentang Kami",
    nav3 		: "Portofolio",
    nav4 		: "Lisensi",
    nav5 		: "Galeri",
    nav6 		: "Hubungi Kami",
  }, action) {
  
	switch (action.type) {
		case 'CHANGE_LANGUAGE_IND_TO_ENG' : {
			return  {
				...state,
			    nav1 		: "Home",
			    nav2 		: "About Us",
			    nav3 		: "Portfolio",
			    nav4 		: "License",
			    nav5 		: "Gallery",
			    nav6 		: "Contact Us",	
			}
		}

		case 'CHANGE_LANGUAGE_ENG_TO_IND' : {
			return  {
				...state,
			    nav1 		: "Beranda",
			    nav2 		: "Tentang Kami",
			    nav3 		: "Portofolio",
			    nav4 		: "Lisensi",
			    nav5 		: "Galeri",
			    nav6 		: "Hubungi Kami",
			}
		}
	}

	return state;
}