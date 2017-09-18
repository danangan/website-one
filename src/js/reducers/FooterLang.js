export default function reducer(state={
    s2_title 	: "Navigasi",
    s2_1 		: "Beranda",
    s2_2 		: "Tentang Kami",
    s2_3 		: "Portofolio",
    s2_4 		: "Lisensi",
    s2_5 		: "Galeri",
    s2_6 		: "Hubungi Kami",
    s3_1 		: "Kembali ke Atas"
  }, action) {
  
	switch (action.type) {
		case 'CHANGE_LANGUAGE_IND_TO_ENG' : {
			return  {
				...state,
			    s2_title 	: "Navigate",
			    s2_1 		: "Home",
			    s2_2 		: "About Us",
			    s2_3 		: "Portfolio",
			    s2_4 		: "License",
			    s2_5 		: "Gallery",
			    s2_6 		: "Contact Us",	
			    s3_1 		: "Back to Top"
			}
		}

		case 'CHANGE_LANGUAGE_ENG_TO_IND' : {
			return  {
				...state,
			    s2_title 	: "Navigasi",
			    s2_1 		: "Beranda",
			    s2_2 		: "Tentang Kami",
			    s2_3 		: "Portofolio",
			    s2_4 		: "Lisensi",
			    s2_5 		: "Galeri",
			    s2_6 		: "Hubungi Kami",
			    s3_1 		: "Kembali ke Atas",
			}
		}
	}

	return state;
}