export default function reducer(state={
    s1_title 		: "Tentang Kami",
    s1_button 		: "Baca Lebih Lanjut",
    s2_title 		: "Profil Perusahaan",
    s2_1 			: "PT Otto Nusantara Energi adalah perusahaan energi nasional yang berdiri pada tahun 2011.",
    s2_2 			: "Kompetensi dan bisnis kami berawal dari pemanfaatan CNG, operasi dan perawatan, dan gas plant refurbisment untuk menghemat penggunaan bahan bakar dan sebagai alternatif pengganti BBM",
    s2_3 			: "Sebagai jawaban atas tuntutan kebutuhan konsumen, dengan bergabungnya beberapa tenaga ahli dari berbagai disiplin ilmu, usaha kami berkembang mencakup kegiatan jasa-jasa mechanical, electrical, instument, dan konsultansi energi.",
  	s2_4 			: "Memadukan keahlian di bidang teknologi terkini dan manajemen modern, kami senantiasa berupaya memberikan manfaat untuk pelanggan, karyawan, share holder dan lingkungan serta masyarakat luas.",
  	s2_5 			: "Dengan mengetahui mata rantai pasokan, pendistribusian CNG dan jenis bahan bakar lain serta alat-alat pendukung produksi yang menyangkut mechanical, electrical, instrument serta ketersediaan tenaga terlatih untuk menjamin kontinuitas proses, kami mampu memberikan solusi secara komprehensif kepada pelanggan.",
  	s3_1_title 		: "Visi Perusahaan",
  	s3_1_content 	: "Menjadi perusahaan energi nasional ramah lingkungan yang handal dan terpercaya dalam memberikan solusi komprehensif",
  	s3_2_title 		: "Misi Perusahaan",
  	s3_2_content_1 	: "Bersama-sama pelanggan mencapai efisiensi atas aset dan investasinya.",
  	s3_2_content_2 	: "Melakukan inovasi dan meningkatkan kompetensi secara konsisten dalam manajemen, organisasi, teknis, dan operasi.",
  	s3_2_content_3 	: "Menciptakan lingkungan kerja yang kondusif dan membanggakan untuk berkarya dan berprestasi.",
  	s3_2_content_4 	: "Menjaga kepedulian dan tanggung jawab yang tinggi terhadap lingkungan sosial dan kelestarian lingkungan hidup dengan mengutamakan keselamatan kerja bagi karyawan, lingkungan, dan masyarakat.",
  	s4_title 		: "Manajemen",
  	s4_1 			: "Komisaris",
  	s4_2 			: "Direktur Utama",
  	s4_3 			: "Direktur Operasional",
  	s4_4 			: "Direktur Pemasaran",
  	s5 				: "Manajemen PT OTTO NUSANTARA ENERGY bertekad untuk terus menjaga kekompakan, kompetensi, dan komitmen terhadap tata nilai demi terciptanya  visi dan misi perusahaan.",
  }, action) {
  
	switch (action.type) {
		case 'CHANGE_LANGUAGE_IND_TO_ENG' : {
			return  {
				...state,
				s1_title 		: "ABOUT US",
				s1_button 		: "CONTINUE",
				s2_title 		: "Company Profile",
				s2_1 			: "PT Otto Nusantara Energy is a national energy company established in 2011.",
				s2_2 			: "Our business and competency begun from Compressed Natural Gas (CNG) utilization, Operation and Maintenance, and Gas Plant Refurbishment as a mean to reduce fuel usage and as an alternative to oil fuel.",
				s2_3 			: "Answering to the requirement by our customers and with the consolidation of professionals, we expand our business line into mechanical, electrical, instrumentation, and energy consulting.",
				s2_4 			: "By combining the excellence in current technology and modern management, we continuously strive to provide benefits to customers, employees, shareholders, society and environment.",
				s2_5 			: "Our understanding in CNG and other type of fuel supply chain and distribution, also the production support equipment related to mechanical, electrical, instrumentation, as well as man power to guarantee the process continuity, enables us to provide comprehensive solution to the customers.",
				s3_1_title		: "Company Vision",
				s3_1_content 	: "Become an environment-friendly, reliable, and trustworthy national energy company in providing comprehensive solution.",
				s3_2_title 		: "Company Mission",
				s3_2_content_1 	: "Together with customers achieving efficiency for their assets and investment.",
				s3_2_content_2 	: "Innovate and improve competency in management, organization, technical, and operation consistently.",
				s3_2_content_3 	: "Creating a condusive and proud work environment for empower work and achievement.",
				s3_2_content_4 	: "Care and responsible for social and natural environment by enforcing work safety for employees, environment, and society.",
			  	s4_title 		: "Management",
			  	s4_1 			: "Commissioner",
			  	s4_2 			: "President Director",
			  	s4_3 			: "Operational Director",
			  	s4_4 			: "Marketing Director",			
			  	s5 				: "PT OTTO NUSANTARA ENERGY'S MANAGEMENT DETERMINED TO MAINTAIN TEAMWORK, COMPETENCY, AND COMMITMENT TO COMPANY VALUES FOR ACHIEVING COMPANY'S VISION AND MISSION"
			}
		}

		case 'CHANGE_LANGUAGE_ENG_TO_IND' : {
			return  {
				...state,
			 	s1_title 		: "Tentang Kami",
			    s1_button 		: "Baca Lebih Lanjut",
			    s2_title 		: "Profil Perusahaan",
			    s2_1 			: "PT Otto Nusantara Energi adalah perusahaan energi nasional yang berdiri pada tahun 2011.",
			    s2_2 			: "Kompetensi dan bisnis kami berawal dari pemanfaatan CNG, operasi dan perawatan, dan gas plant refurbisment untuk menghemat penggunaan bahan bakar dan sebagai alternatif pengganti BBM",
			    s2_3 			: "Sebagai jawaban atas tuntutan kebutuhan konsumen, dengan bergabungnya beberapa tenaga ahli dari berbagai disiplin ilmu, usaha kami berkembang mencakup kegiatan jasa-jasa mechanical, electrical, instument, dan konsultansi energi.",
			  	s2_4 			: "Memadukan keahlian di bidang teknologi terkini dan manajemen modern, kami senantiasa berupaya memberikan manfaat untuk pelanggan, karyawan, share holder dan lingkungan serta masyarakat luas.",
			  	s2_5 			: "Dengan mengetahui mata rantai pasokan, pendistribusian CNG dan jenis bahan bakar lain serta alat-alat pendukung produksi yang menyangkut mechanical, electrical, instrument serta ketersediaan tenaga terlatih untuk menjamin kontinuitas proses, kami mampu memberikan solusi secara komprehensif kepada pelanggan.",
			  	s3_1_title 		: "Visi Perusahaan",
			  	s3_1_content 	: "Menjadi perusahaan energi nasional ramah lingkungan yang handal dan terpercaya dalam memberikan solusi komprehensif",
			  	s3_2_title 		: "Misi Perusahaan",
			  	s3_2_content_1 	: "Bersama-sama pelanggan mencapai efisiensi atas aset dan investasinya.",
			  	s3_2_content_2 	: "Melakukan inovasi dan meningkatkan kompetensi secara konsisten dalam manajemen, organisasi, teknis, dan operasi.",
			  	s3_2_content_3 	: "Menciptakan lingkungan kerja yang kondusif dan membanggakan untuk berkarya dan berprestasi.",
			  	s3_2_content_4 	: "Menjaga kepedulian dan tanggung jawab yang tinggi terhadap lingkungan sosial dan kelestarian lingkungan hidup dengan mengutamakan keselamatan kerja bagi karyawan, lingkungan, dan masyarakat.",
			  	s4_title 		: "Manajemen",
			  	s4_1 			: "Komisaris",
			  	s4_2 			: "Direktur Utama",
			  	s4_3 			: "Direktur Operasional",
			  	s4_4 			: "Direktur Pemasaran",
			  	s5 				: "Manajemen PT OTTO NUSANTARA ENERGY bertekad untuk terus menjaga kekompakan, kompetensi, dan komitmen terhadap tata nilai demi terciptanya  visi dan misi perusahaan",
			}
		}
	}

	return state;
}