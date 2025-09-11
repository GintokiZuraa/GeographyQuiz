// types/kabupatens.ts
export interface Kabupaten {
    image_url: string;
    question: string;
    answer: string[];
}

export interface ProvinceKabupatens {
    [kabupatenName: string]: Kabupaten;
}

export interface KabupatensData {
    [provinceName: string]: ProvinceKabupatens;
}

export const kabupatens = {
    'aceh': {
            'aceh barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Lokasi_Aceh_Kabupaten_Aceh_Barat.svg/1280px-Lokasi_Aceh_Kabupaten_Aceh_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Aceh Barat (West Aceh)', 'ache barat', 'Aceh barat', 'Aceh Barat']
            },
            'aceh barat daya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lokasi_Aceh_Kabupaten_Aceh_Barat_Daya.svg/1280px-Lokasi_Aceh_Kabupaten_Aceh_Barat_Daya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Aceh Barat Daya (South-West Aceh)', 'aceh barat daya', 'Aceh barat daya', 'Aceh Barat Daya']
            },
            'Aceh Besar': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Lokasi_Aceh_Kabupaten_Aceh_Besar.svg/1280px-Lokasi_Aceh_Kabupaten_Aceh_Besar.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Aceh Besar', 'aceh besar', 'Aceh besar']
            },
            'aceh jaya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Lokasi_Aceh_Kabupaten_Aceh_Jaya.svg/1280px-Lokasi_Aceh_Kabupaten_Aceh_Jaya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Aceh Jaya', 'aceh jaya', 'Aceh jaya']
            },
            'aceh selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lokasi_Aceh_Kabupaten_Aceh_Selatan.svg/1280px-Lokasi_Aceh_Kabupaten_Aceh_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Aceh Selatan (South Aceh)', 'aceh selatan', 'Aceh selatan', 'Aceh Selatan']
            },
            'Aceh Singkil': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lokasi_Aceh_Kabupaten_Aceh_Singkil.svg/1280px-Lokasi_Aceh_Kabupaten_Aceh_Singkil.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Aceh Singkil', 'Aceh singkil', 'aceh singkil']
            },
            'Aceh Tamiang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lokasi_Aceh_Kabupaten_Aceh_Tamiang.svg/1280px-Lokasi_Aceh_Kabupaten_Aceh_Tamiang.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Aceh Tamiang', 'aceh tamiang', 'Aceh tamiang']
            },
            'Aceh Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lokasi_Aceh_Kabupaten_Aceh_Tengah.svg/1280px-Lokasi_Aceh_Kabupaten_Aceh_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Aceh Tengah (Central Aceh)', 'aceh tengah', 'Aceh tengah']
            },
            'Aceh Tenggara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Lokasi_Aceh_Kabupaten_Aceh_Tenggara.svg/1280px-Lokasi_Aceh_Kabupaten_Aceh_Tenggara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Aceh Tenggara (Southeast Aceh)', 'aceh tenggara', 'Aceh tenggara']
            },
            'Aceh Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lokasi_Aceh_Kabupaten_Aceh_Timur.svg/1280px-Lokasi_Aceh_Kabupaten_Aceh_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Aceh Timur (East Aceh)', 'aceh timur', 'Aceh timur']
            },
            'Aceh Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lokasi_Aceh_Kabupaten_Aceh_Utara.svg/1280px-Lokasi_Aceh_Kabupaten_Aceh_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Aceh Utara (North Aceh)', 'aceh utara', 'Aceh utara']
            },
            'Bener Meriah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Lokasi_Aceh_Kabupaten_Bener_Meriah.svg/1280px-Lokasi_Aceh_Kabupaten_Bener_Meriah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bener Meriah', 'bener meriah', 'Bener meriah']
            },
            'Bireuen': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Lokasi_Aceh_Kabupaten_Bireuen.svg/1280px-Lokasi_Aceh_Kabupaten_Bireuen.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bireuen', 'bireuen']
            },
            'Gayo Lues': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Lokasi_Aceh_Kabupaten_Gayo_Lues.svg/1280px-Lokasi_Aceh_Kabupaten_Gayo_Lues.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Gayo Lues', 'gayo lues', 'Gayo lues']
            },
            'Nagan Raya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Lokasi_Aceh_Kabupaten_Nagan_Raya.svg/1280px-Lokasi_Aceh_Kabupaten_Nagan_Raya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Nagan Raya', 'nagan raya', 'Nagan raya']
            },
            'Pidie': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Lokasi_Aceh_Kabupaten_Pidie.svg/1280px-Lokasi_Aceh_Kabupaten_Pidie.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pidie', 'pidie']
            },
            'Pidie Jaya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lokasi_Aceh_Kabupaten_Pidie_Jaya.svg/1280px-Lokasi_Aceh_Kabupaten_Pidie_Jaya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pidie Jaya', 'Pidie Jaya', 'Pidie Jaya']
            },
            'Simeulue': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Lokasi_Aceh_Kabupaten_Simeulue.svg/1280px-Lokasi_Aceh_Kabupaten_Simeulue.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Simeulue', 'simeulue']
            },
        },
        'north_sumatra' : {
            'Asahan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lokasi_Sumatra_Utara_Kabupaten_Asahan.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Asahan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Asahan', 'asahan']
            },
            'Batu Bara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Lokasi_Sumatra_Utara_Kabupaten_Batu_Bara.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Batu_Bara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Batu Bara', 'Batu bara', 'batu bara', 'batubara', 'Batubara']
            },
            'Dairi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lokasi_Sumatra_Utara_Kabupaten_Dairi.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Dairi.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Dairi', 'dairi']
            },
            'Deli Serdang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lokasi_Sumatra_Utara_Kabupaten_Deli_Serdang.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Deli_Serdang.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Deli Serdang', 'deli serdang', 'Deli serdang']
            },
            'Humbang Hasundutan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lokasi_Sumatra_Utara_Kabupaten_Humbang_Hasundutan.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Humbang_Hasundutan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Humbang Hasundutan', 'humbang hasundutan', 'Humbang hasundutan']
            },
            'Karo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lokasi_Sumatra_Utara_Kabupaten_Karo.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Karo.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Karo', 'karo']
            },
            'Labuhanbatu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lokasi_Sumatra_Utara_Kabupaten_Labuhanbatu.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Labuhanbatu.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Labuhanbatu', 'labuhanbatu']
            },
            'Labuhanbatu Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Lokasi_Sumatra_Utara_Kabupaten_Labuhanbatu_Selatan.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Labuhanbatu_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Labuhanbatu Selatan (South Labuhanbatu)', 'Labuhanbatu selatan', 'labuhanbatu selatan', 'Labuhanbatu Selatan']
            },
            'Labuhanbatu Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lokasi_Sumatra_Utara_Kabupaten_Labuhanbatu_Utara.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Labuhanbatu_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Labuhanbatu Utara (North Labuhanbatu)', 'Labuhanbatu utara', 'labuhanbatu utara', 'Labuhanbatu Utara']
            },
            'Langkat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Lokasi_Sumatra_Utara_Kabupaten_Langkat.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Langkat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Langkat', 'langkat']
            },
            'Mandailing Natal': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lokasi_Sumatra_Utara_Kabupaten_Mandailing_Natal.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Mandailing_Natal.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mandailing Natal', 'mandailing natal', 'Mandailing Natal']
            },
            'Nias': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Lokasi_Sumatra_Utara_Kabupaten_Nias.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Nias.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Nias', 'nias']
            },
            'Nias Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lokasi_Sumatra_Utara_Kabupaten_Nias_Barat.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Nias_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Nias Barat (West Nias)', 'nias barat', 'Nias Barat', 'Nias barat']
            },
            'Nias Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Lokasi_Sumatra_Utara_Kabupaten_Nias_Selatan.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Nias_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Nias Selatan (South Nias)', 'nias selatan', 'Nias Selatan', 'Nias selatan']
            },
            'Nias Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lokasi_Sumatra_Utara_Kabupaten_Nias_Utara.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Nias_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Nias Utara (North Nias)', 'nias utara', 'Nias Utara', 'Nias utara']
            },
            'Padang Lawas': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lokasi_Sumatra_Utara_Kabupaten_Padang_Lawas.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Padang_Lawas.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Padang Lawas', 'padang lawas', 'Padang lawas']
            },
            'Padang Lawas Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lokasi_Sumatra_Utara_Kabupaten_Padang_Lawas_Utara.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Padang_Lawas_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Padang Lawas Utara (North Padang Lawas)', 'Padang Lawas Utara', 'Padang lawas Utara', 'padang lawas utara']
            },
            'Pakpak Bharat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Lokasi_Sumatra_Utara_Kabupaten_Pakpak_Bharat.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Pakpak_Bharat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pakpak Bharat', 'Pakpak bharat', 'pakpak bharat']
            },
            'Samosir': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Lokasi_Sumatra_Utara_Kabupaten_Samosir.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Samosir.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Samosir', 'samosir']
            },
            'Serdang Bedagai': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Lokasi_Sumatra_Utara_Kabupaten_Serdang_Bedagai.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Serdang_Bedagai.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Serdang Bedagai', 'Serdang bedagai', 'serdang bedagai']
            },
            'Simalungun': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Lokasi_Sumatra_Utara_Kabupaten_Simalungun.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Simalungun.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Simalungun', 'simalungun']
            },
            'Tapanuli Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Lokasi_Sumatra_Utara_Kabupaten_Tapanuli_Selatan.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Tapanuli_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tapanuli Selatan (South Tapanuli)', 'tapanuli selatan', 'Tapanuli selatan', 'Tapanuli Selatan']
            },
            'Tapanuli Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lokasi_Sumatra_Utara_Kabupaten_Tapanuli_Tengah.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Tapanuli_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tapanuli Tengah (Central Tapanuli)', 'Tapanuli Tengah', 'tapanuli tengah', 'Tapanuli tengah']
            },
            'Tapanuli Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lokasi_Sumatra_Utara_Kabupaten_Tapanuli_Utara.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Tapanuli_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tapanuli Utara (North Tapanuli)', 'Tapanuli Utara', 'tapanuli utara', 'Tapanuli utara']
            },
            'Toba': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lokasi_Sumatra_Utara_Kabupaten_Toba_Samosir.svg/1280px-Lokasi_Sumatra_Utara_Kabupaten_Toba_Samosir.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Toba', 'toba']
            },
        },
        'west_sumatra' : {
            'Agam': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Lokasi_Sumatra_Barat_Kabupaten_Agam.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Agam.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Agam', 'agam']
            },
            'Dharmasraya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Lokasi_Sumatra_Barat_Kabupaten_Dharmasraya.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Dharmasraya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Dharmasraya', 'dharmasraya']
            },
            'Kepulauan Mentawai': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Lokasi_Sumatra_Barat_Kabupaten_Kepulauan_Mentawai.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Kepulauan_Mentawai.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepulauan Mentawai (Mentawai Islands)', 'Kepulauan Mentawai', 'Kepulauan mentawai', 'kepulauan mentawai', 'Mentawai', 'mentawai']
            },
            'Lima Puluh Kota': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Lokasi_Sumatra_Barat_Kabupaten_Lima_Puluh_Kota.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Lima_Puluh_Kota.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lima Puluh Kota', 'lima puluh kota', 'Lima puluh kota', 'Lima Puluh', 'lima puluh']
            },
            'Padang Pariaman': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lokasi_Sumatra_Barat_Kabupaten_Padang_Pariaman.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Padang_Pariaman.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Padang Pariaman', 'padang pariaman', 'Padang pariaman']
            },
            'Pasaman': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lokasi_Sumatra_Barat_Kabupaten_Pasaman.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Pasaman.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pasaman', 'pasaman']
            },
            'Pasaman Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lokasi_Sumatra_Barat_Kabupaten_Pasaman_Barat.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Pasaman_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pasaman Barat (West Pasaman)', 'Pasaman Barat', 'Pasaman barat', 'pasaman barat']
            },
            'Pesisir Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Lokasi_Sumatra_Barat_Kabupaten_Pesisir_Selatan.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Pesisir_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pesisir Selatan (South Pesisir)', 'Pesisir Selatan', 'pesisir selatan', 'Pesisir selatan']
            },
            'Sijunjung': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lokasi_Sumatra_Barat_Kabupaten_Sijunjung.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Sijunjung.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sijunjung', 'sijunjung']
            },
            'Solok': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Lokasi_Sumatra_Barat_Kabupaten_Solok.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Solok.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Solok', 'solok']
            },
            'Solok Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Lokasi_Sumatra_Barat_Kabupaten_Solok_Selatan.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Solok_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Solok Selatan (South Solok)', 'solok selatan', 'Solok selatan', 'Solok Selatan']
            },
            'Tanah Datar': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Lokasi_Sumatra_Barat_Kabupaten_Tanah_Datar.svg/1280px-Lokasi_Sumatra_Barat_Kabupaten_Tanah_Datar.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tanah Datar', 'tanah datar', 'Tanah datar']
            },
        },
        'riau' : {
            'Bengkalis': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lokasi_Riau_Kabupaten_Bengkalis.svg/1280px-Lokasi_Riau_Kabupaten_Bengkalis.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bengkalis', 'bengkalis']
            },
            'Indragiri Hilir': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lokasi_Riau_Kabupaten_Indragiri_Hilir.svg/1280px-Lokasi_Riau_Kabupaten_Indragiri_Hilir.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Indragiri Hilir', 'indragiri hilir', 'Indragiri hilir']
            },
            'Indragiri Hulu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lokasi_Riau_Kabupaten_Indragiri_Hulu.svg/1280px-Lokasi_Riau_Kabupaten_Indragiri_Hulu.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Indragiri Hulu', 'indragiri hulu', 'Indragiri hulu']
            },
            'Kampar': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lokasi_Riau_Kabupaten_Kampar.svg/1280px-Lokasi_Riau_Kabupaten_Kampar.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kampar', 'kampar']
            },
            'Kepulauan Meranti': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lokasi_Riau_Kabupaten_Kepulauan_Meranti.svg/1280px-Lokasi_Riau_Kabupaten_Kepulauan_Meranti.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepulauan Meranti (Meranti Islands)', 'Kepulauan Meranti', 'Kepulauan meranti', 'kepulauan meranti', 'Meranti', 'meranti'], 
            },
            'Kuantan Singingi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lokasi_Riau_Kabupaten_Kuantan_Singingi.svg/1280px-Lokasi_Riau_Kabupaten_Kuantan_Singingi.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kuantan Singingi', 'kuantan singingi', 'Kuantan singingi']
            },
            'Pelalawan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Lokasi_Riau_Kabupaten_Pelalawan.svg/1280px-Lokasi_Riau_Kabupaten_Pelalawan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pelalawan', 'pelalawan']
            },
            'Rokan Hilir': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lokasi_Riau_Kabupaten_Rokan_Hilir.svg/1280px-Lokasi_Riau_Kabupaten_Rokan_Hilir.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Rokan Hilir', 'Rokan hilir', 'rokan hilir']
            },
            'Rokan Hulu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Lokasi_Riau_Kabupaten_Rokan_Hulu.svg/1280px-Lokasi_Riau_Kabupaten_Rokan_Hulu.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Rokan Hulu', 'rokan hulu', 'Rokan hulu']
            },
            'Siak': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Lokasi_Riau_Kabupaten_Siak.svg/1280px-Lokasi_Riau_Kabupaten_Siak.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Siak', 'siak']
            },
        },
        'jambi' : {
            'Batanghari': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lokasi_Jambi_Kabupaten_Batanghari.svg/1280px-Lokasi_Jambi_Kabupaten_Batanghari.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Batanghari', 'batanghari']
            },
            'Bungo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Lokasi_Jambi_Kabupaten_Bungo.svg/1280px-Lokasi_Jambi_Kabupaten_Bungo.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bungo', 'bungo']
            },
            'Kerinci': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Lokasi_Jambi_Kabupaten_Kerinci.svg/1280px-Lokasi_Jambi_Kabupaten_Kerinci.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kerinci', 'kerinci']
            },
            'Merangin': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Lokasi_Jambi_Kabupaten_Merangin.svg/1280px-Lokasi_Jambi_Kabupaten_Merangin.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Merangin', 'merangin']
            },
            'Muaro Jambi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lokasi_Jambi_Kabupaten_Muaro_Jambi.svg/1280px-Lokasi_Jambi_Kabupaten_Muaro_Jambi.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Muaro Jambi', 'muaro jambi', 'Muaro jambi', 'muaro', 'Muaro']
            },
            'Sarolangun': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Lokasi_Jambi_Kabupaten_Sarolangun.svg/1280px-Lokasi_Jambi_Kabupaten_Sarolangun.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sarolangun', 'sarolangun']
            },
            'Tanjung Jabung Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Lokasi_Jambi_Kabupaten_Tanjung_Jabung_Barat.svg/1280px-Lokasi_Jambi_Kabupaten_Tanjung_Jabung_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tanjung Jabung Barat (West Tanjung Jabung)', 'Tanjung jabung barat', 'Tanjung Jabung Barat', 'Tanjung Jabung Barat']
            },
            'Tanjung Jabung Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lokasi_Jambi_Kabupaten_Tanjung_Jabung_Timur.svg/1280px-Lokasi_Jambi_Kabupaten_Tanjung_Jabung_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tanjung Jabung Timur (East Tanjung Jabung)', 'Tanjung Jabung Timur', 'Tanjung jabung timur', 'tanjung jabung timur']
            },
            'Tebo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Lokasi_Jambi_Kabupaten_Tebo.svg/1280px-Lokasi_Jambi_Kabupaten_Tebo.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tebo', 'tebo']
            },
        },
        'south_sumatra' : {
            'Banyuasin': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lokasi_Sumatra_Selatan_Kabupaten_Banyuasin.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Banyuasin.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Banyuasin', 'banyuasin']
            },
            'Empat Lawang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Lokasi_Sumatra_Selatan_Kabupaten_Empat_Lawang.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Empat_Lawang.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Empat Lawang', 'Empat lawang', 'empat lawang']
            },
            'Lahat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Lokasi_Sumatra_Selatan_Kabupaten_Lahat.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Lahat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lahat', 'lahat']
            },
            'Muara Enim': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Lokasi_Sumatra_Selatan_Kabupaten_Muara_Enim.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Muara_Enim.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Muara Enim', 'muara enim', 'Muara enim']
            },
            'Musi Banyuasin': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lokasi_Sumatra_Selatan_Kabupaten_Musi_Banyuasin.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Musi_Banyuasin.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Musi Banyuasin', 'musi banyuasin', 'Musi banyuasin']
            },
            'Musi Rawas': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Lokasi_Sumatra_Selatan_Kabupaten_Musi_Rawas.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Musi_Rawas.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Musi Rawas', 'Musi rawas', 'musi rawas']
            },
            'Musi Rawas Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Lokasi_Sumatra_Selatan_Kabupaten_Musi_Rawas_Utara.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Musi_Rawas_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Musi Rawas Utara (North Musi Rawas)', 'Musi Rawas Utara', 'musi rawas utara', 'Musi rawas utara']
            },
            'Ogan Ilir': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lokasi_Sumatra_Selatan_Kabupaten_Ogan_Ilir.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Ogan_Ilir.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Ogan Ilir', 'Ogan ilir', 'ogan ilir']
            },
            'Ogan Komering Ilir': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lokasi_Sumatra_Selatan_Kabupaten_Ogan_Ilir.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Ogan_Ilir.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Ogan Komering Ilir', 'ogan komering ilir', 'Ogan komering ilir']
            },
            'Ogan Komering Ulu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Lokasi_Sumatra_Selatan_Kabupaten_Ogan_Komering_Ulu.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Ogan_Komering_Ulu.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Ogan Komering Ulu', 'ogan komering ulu', 'Ogan komering ulu']
            },
            'Ogan Komering Ulu Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lokasi_Sumatra_Selatan_Kabupaten_Ogan_Komering_Ulu_Selatan.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Ogan_Komering_Ulu_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Ogan Komering Ulu Selatan (South Ogan Komering Ulu)', 'Ogan Komering Ulu Selatan', 'ogan komering ulu selatan', 'Ogan komering ulu selatan']
            },
            'Ogan Komering Ulu Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lokasi_Sumatra_Selatan_Kabupaten_Ogan_Komering_Ulu_Timur.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Ogan_Komering_Ulu_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Ogan Komering Ulu Timur (East Ogan Komering Ulu)', 'Ogan Komering Ulu Timur', 'ogan komering ulu timur', 'Ogan komering ulu timur']
            },
            'Penukal Abab Lematang Ilir': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Lokasi_Sumatra_Selatan_Kabupaten_Penukal_Abab_Lematang_Ilir.svg/1280px-Lokasi_Sumatra_Selatan_Kabupaten_Penukal_Abab_Lematang_Ilir.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Penukal Abab Lematang Ilir', 'penukal abab lematang ilir', 'Penukal abab lematang ilir']
            },
        },
        'bengkulu_benkgula' : {
            'Bengkulu Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lokasi_Bengkulu_Kabupaten_Bengkulu_Selatan.svg/800px-Lokasi_Bengkulu_Kabupaten_Bengkulu_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bengkulu Selatan (South Bengkulu)', 'Bengkulu Selatan', 'bengkulu selatan', 'Bengkulu selatan']
            },
            'Bengkulu Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Lokasi_Bengkulu_Kabupaten_Bengkulu_Tengah.svg/800px-Lokasi_Bengkulu_Kabupaten_Bengkulu_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bengkulu Tengah (Central Bengkulu)', 'Bengkulu Tengah', 'bengkulu tengah', 'Bengkulu tengah']
            },
            'Bengkulu Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Lokasi_Bengkulu_Kabupaten_Bengkulu_Utara.svg/800px-Lokasi_Bengkulu_Kabupaten_Bengkulu_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bengkulu Utara (North Bengkulu)', 'Bengkulu Utara', 'Bengkulu utara', 'bengkulu utara']
            },
            'Kaur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Lokasi_Bengkulu_Kabupaten_Kaur.svg/800px-Lokasi_Bengkulu_Kabupaten_Kaur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kaur', 'kaur']
            },
            'Kepahiang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Lokasi_Bengkulu_Kabupaten_Kepahiang.svg/800px-Lokasi_Bengkulu_Kabupaten_Kepahiang.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepahiang', 'kepahiang']
            },
            'Lebong': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Lokasi_Bengkulu_Kabupaten_Lebong.svg/800px-Lokasi_Bengkulu_Kabupaten_Lebong.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lebong', 'lebong']
            },
            'Mukomuko': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Lokasi_Bengkulu_Kabupaten_Mukomuko.svg/800px-Lokasi_Bengkulu_Kabupaten_Mukomuko.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mukomuko', 'mukomuko']
            },
            'Rejang Lebong': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Lokasi_Bengkulu_Kabupaten_Rejang_Lebong.svg/800px-Lokasi_Bengkulu_Kabupaten_Rejang_Lebong.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Rejang Lebong', 'Rejang lebong', 'rejang lebong']
            },
            'Seluma': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lokasi_Bengkulu_Kabupaten_Seluma.svg/800px-Lokasi_Bengkulu_Kabupaten_Seluma.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Seluma', 'seluma']
            },
        },
        'lampung' : {
            'Lampung Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lokasi_Lampung_Kabupaten_Lampung_Barat.svg/1024px-Lokasi_Lampung_Kabupaten_Lampung_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lampung Barat (West Lampung)', 'Lampung Barat', 'lampung barat', 'Lampung barat']
            },
            'Lampung Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Peta_Lokasi_Kabupaten_Lampung_Selatan.svg/1024px-Peta_Lokasi_Kabupaten_Lampung_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lampung Selatan (South Lampung)', 'Lampung Selatan', 'lampung selatan', 'Lampung selatan']
            },
            'Lampung Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lokasi_Lampung_Kabupaten_Lampung_Tengah.svg/1024px-Lokasi_Lampung_Kabupaten_Lampung_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lampung Tengah (Central Lampung)', 'Lampung Tengah', 'lampung tengah', 'Lampung tengah']
            },
            'Lampung Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Lokasi_Lampung_Kabupaten_Lampung_Timur.svg/1024px-Lokasi_Lampung_Kabupaten_Lampung_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lampung Timur (East Lampung)', 'Lampung Timur', 'Lampung Timur', 'Lampung Timur']
            },
            'Lampung Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lokasi_Lampung_Kabupaten_Lampung_Utara.svg/1024px-Lokasi_Lampung_Kabupaten_Lampung_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lampung Utara (North Lampung)', 'Lampung Utara', 'lampung utara', 'Lampung utara']
            },
            'Mesuji': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Lokasi_Lampung_Kabupaten_Mesuji.svg/1024px-Lokasi_Lampung_Kabupaten_Mesuji.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mesuji', 'mesuji']
            },
            'Pesawaran': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Lokasi_Lampung_Kabupaten_Pesawaran.svg/1024px-Lokasi_Lampung_Kabupaten_Pesawaran.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pesawaran', 'pesawaran']
            },
            'Pesisir Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Lokasi_Lampung_Kabupaten_Pesisir_Barat.svg/1024px-Lokasi_Lampung_Kabupaten_Pesisir_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pesisir Barat (West Pesisir)', 'Pesisir Barat', 'pesisir barat', 'Pesisir barat']
            },
            'Pringsewu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Lokasi_Lampung_Kabupaten_Pringsewu.svg/1024px-Lokasi_Lampung_Kabupaten_Pringsewu.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pringsewu', 'pringsewu']
            },
            'Tanggamus': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lokasi_Lampung_Kabupaten_Tanggamus.svg/1024px-Lokasi_Lampung_Kabupaten_Tanggamus.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tanggamus', 'tanggamus', 'tangamus', 'Tangamus']
            },
            'Tulang Bawang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lokasi_Lampung_Kabupaten_Tulang_Bawang.svg/1024px-Lokasi_Lampung_Kabupaten_Tulang_Bawang.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tulang Bawang', 'tulang bawang', 'Tulang bawang']
            },
            'Tulang Bawang Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Lokasi_Lampung_Kabupaten_Tulang_Bawang_Barat.svg/1024px-Lokasi_Lampung_Kabupaten_Tulang_Bawang_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tulang Bawang Barat (West Tulang Bawang)', 'Tulang Bawang Barat', 'Tulang bawang barat', 'tulang bawang barat']
            },
            'Way Kanan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lokasi_Lampung_Kabupaten_Way_Kanan.svg/1024px-Lokasi_Lampung_Kabupaten_Way_Kanan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Way Kanan', 'Way kanan', 'way kanan']
            },
        },
        'kepulauan_bangka_belitung' : {
            
            'Bangka': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lokasi_Babel_Kabupaten_Bangka.svg/1280px-Lokasi_Babel_Kabupaten_Bangka.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bangka', 'bangka']
            },
            'Bangka Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Lokasi_Babel_Kabupaten_Bangka_Barat.svg/1280px-Lokasi_Babel_Kabupaten_Bangka_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bangka Barat (West)', 'Bangka Barat', 'b    angka barat', 'Bangka barat']
            },
            'Bangka Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lokasi_Babel_Kabupaten_Bangka_Selatan.svg/1280px-Lokasi_Babel_Kabupaten_Bangka_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bangka Selatan (South Bangka)', 'Bangka Selatan', 'bangka selatan', 'Bangka selatan']
            },
            'Bangka Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Lokasi_Babel_Kabupaten_Bangka_Tengah.svg/1280px-Lokasi_Babel_Kabupaten_Bangka_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bangka Tengah (Central Bangka)', 'Bangka Tengah', 'bangka tengah', 'Bangka tengah']
            },
            'Belitung': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lokasi_Babel_Kabupaten_Belitung.svg/1280px-Lokasi_Babel_Kabupaten_Belitung.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Belitung', 'belitung']
            },
            'Belitung Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lokasi_Babel_Kabupaten_Belitung_Timur.svg/1280px-Lokasi_Babel_Kabupaten_Belitung_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Belitung Timur (East Belitung)', 'Belitung Timur', 'belitung timur', 'Belitung timur']
            },
        },
        'riau_islands' : { 
            'Bintan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/1/10/Locator_Bintan_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bintan', 'bintan']
            },
            'Karimun': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Locator_Karimun_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Karimun', 'karimun']
            },
            'Kepulauan Anambas': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/9/91/Locator_Anambas_Islands_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepulauan Anambas (Anambas Islands)', 'Kepulauan Anambas', 'kepulauan anambas', 'Kepulauan anambas', 'anambas', 'Anambas']
            },
            'Lingga': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Locator_Lingga_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lingga', 'lingga']
            },
            'Natuna': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Locator_Natuna_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Natuna', 'natuna']
            },
        },
        'Daerah_husus_Ibukota_Jakarta' : {
            'Administrasi Kepulauan Seribu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Indonesia_Jakarta_Thousand_Islands_Regency_location_map.svg/1024px-Indonesia_Jakarta_Thousand_Islands_Regency_location_map.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Administrasi Kepulauan Seribu (Thousand Islands)', 'Administrasi Kepulauan Seribu', 'Kepulauan Seribu', 'Administrasi kepulauan seribu', 'seribu', 'Seribu', 'Seribu islands', 'seribu islands']
            },
        },
        'west_java' : {
            'Bandung': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/32.04.00_JawaBarat_Bandung_Kabupaten.svg/1920px-32.04.00_JawaBarat_Bandung_Kabupaten.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bandung', 'bandung']
            },
            'Bandung Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/32.17.00_JawaBarat_Bandung_Barat.svg/1920px-32.17.00_JawaBarat_Bandung_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bandung Barat (West Bandung)', 'Bandung Barat', 'Bandung barat', 'bandung barat']
            },
            'Bekasi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/32.16.00_JawaBarat_Bekasi_Kabupaten.svg/1920px-32.16.00_JawaBarat_Bekasi_Kabupaten.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bekasi', 'bekasi']
            },
            'Bogor': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/32.01.00_JawaBarat_Bogor_Kabupaten.svg/1920px-32.01.00_JawaBarat_Bogor_Kabupaten.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bogor', 'bogor']
            },
            'Ciamis': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/32.07.00_JawaBarat_Ciamis.svg/1920px-32.07.00_JawaBarat_Ciamis.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Ciamis', 'ciamis']
            },
            'Cianjur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/32.03.00_JawaBarat_Cianjur.svg/1920px-32.03.00_JawaBarat_Cianjur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Cianjur', 'cianjur']
            },
            'Cirebon': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/32.09.00_JawaBarat_Cirebon_Kabupaten.svg/1920px-32.09.00_JawaBarat_Cirebon_Kabupaten.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Cirebon', 'cirebon']
            },
            'Garut': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/32.05.00_JawaBarat_Garut.svg/1920px-32.05.00_JawaBarat_Garut.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Garut', 'garut']
            },
            'Indramayu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/32.12.00_JawaBarat_Indramayu.svg/1920px-32.12.00_JawaBarat_Indramayu.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Indramayu', 'indramayu']
            },
            'Karawang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/32.15.00_JawaBarat_Karawang.svg/1920px-32.15.00_JawaBarat_Karawang.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Karawang', 'karawang']
            },
            'Kuningan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/32.08.00_JawaBarat_Kuningan.svg/1920px-32.08.00_JawaBarat_Kuningan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kuningan', 'kuningan']
            },
            'Majalengka': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/32.10.00_JawaBarat_Majalengka.svg/1920px-32.10.00_JawaBarat_Majalengka.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Majalengka', 'majalengka']
            },
            'Pangandaran': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/32.18.00_JawaBarat_Pangandaran.svg/1920px-32.18.00_JawaBarat_Pangandaran.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pangandaran', 'pangandaran']
            },
            'Purwakarta': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/32.14.00_JawaBarat_Purwakarta.svg/1920px-32.14.00_JawaBarat_Purwakarta.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Purwakarta', 'purwakarta']
            },
            'Subang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/32.13.00_JawaBarat_Subang.svg/1920px-32.13.00_JawaBarat_Subang.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Subang', 'subang']
            },
            'Sukabumi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/32.02.00_JawaBarat_Sukabumi_Kabupaten.svg/1920px-32.02.00_JawaBarat_Sukabumi_Kabupaten.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sukabumi', 'sukabumi']
            },
            'Sumedang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/32.11.00_JawaBarat_Sumedang.svg/1920px-32.11.00_JawaBarat_Sumedang.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sumedang', 'sumedang']
            },
            'Tasikmalaya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/32.06.00_JawaBarat_Tasikmalaya_Kabupaten.svg/1920px-32.06.00_JawaBarat_Tasikmalaya_Kabupaten.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tasikmalaya', 'tasikmalaya']
            },
        },
        'central_java' : {
            'Banjarnegara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Locator_kabupaten_banjarnegara.gif',
                'question': "What is the name of this kabupaten?",
                'answer': ['Banjarnegara', 'banjarnegara']
            },
            'Banyumas': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/5/54/Locator_kabupaten_banyumas.gif',
                'question': "What is the name of this kabupaten?",
                'answer': ['Banyumas', 'banyumas']
            },
            'Batang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Locator_kabupaten_batang.gif',
                'question': "What is the name of this kabupaten?",
                'answer': ['Batang', 'batang']
            },
            'Blora': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/1/10/Locator_kabupaten_blora.gif',
                'question': "What is the name of this kabupaten?",
                'answer': ['Blora', 'blora']
            },
            'Boyolali': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/9/91/Locator_kabupaten_boyolali.gif',
                'question': "What is the name of this kabupaten?",
                'answer': ['Boyolali', 'boyolali']
            },
            'Brebes': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Locator_kabupaten_brebes.gif',
                'question': "What is the name of this kabupaten?",
                'answer': ['Brebes', 'brebes']
            },
            'Cilacap': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Locator_kabupaten_cilacap.gif',
                'question': "What is the name of this kabupaten?",
                'answer': ['Cilacap', 'cilacap']
            },
            'Demak': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/9/95/Locator_kabupaten_demak.gif',
                'question': "What is the name of this kabupaten?",
                'answer': ['Demak', 'demak']
            },
            'Grobogan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/5/52/Locator_kabupaten_grobogan.gif',
                'question': "What is the name of this kabupaten?",
                'answer': ['Grobogan', 'grobogan']
            },
            'Jepara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Locator_kabupaten_jepara.gif',
                'question': "What is the name of this kabupaten?",
                'answer': ['Jepara', 'jepara']
            },
            'Karanganyar': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/7/77/Locator_kabupaten_karanganyar.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Karanganyar', 'karanganyar']
            },
            'Kebumen': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Locator_kabupaten_kebumen.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kebumen', 'kebumen']
            },
            'Kendal': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/8/86/Locator_kabupaten_kendal.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kendal', 'kendal']
            },
            'Klaten': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/1/14/Locator_Kabupaten_Klaten.gif',
                'question': "What is the name of this kabupaten?",
                'answer': ['Klaten', 'klaten']
            },
            'Kudus': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/7/74/Locator_kabupaten_kudus.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kudus', 'kudus']
            },
            'Magelang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Locator_kabupaten_magelang.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Magelang', 'magelang']
            },
            'Pati': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Locator_kabupaten_pati.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pati', 'pati']
            },
            'Pekalongan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/3/32/Locator_kabupaten_pekalongan.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pekalongan', 'pekalongan']
            },
            'Pemalang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Locator_kabupaten_pemalang.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pemalang', 'pemalang']
            },
            'Purbalingga': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Locator_kabupaten_purbalingga.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Purbalingga', 'purbalingga']
            },
            'Purworejo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Locator_kabupaten_purworejo.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Purworejo', 'purworejo']
            },
            'Rembang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Locator_kabupaten_rembang.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Rembang', 'rembang']
            },
            'Semarang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Locator_kabupaten_semarang.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Semarang', 'semarang']
            },
            'Sragen': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Locator_kabupaten_sragen.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sragen', 'sragen']
            },
            'Sukoharjo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Locator_Kabupaten_Sukoharjo.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sukoharjo', 'sukoharjo']
            },
            'Tegal': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Locator_kabupaten_tegal.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tegal', 'tegal']
            },
            'Temanggung': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/7/70/Locator_kabupaten_temanggung.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Temanggung', 'temanggung']
            },
            'Wonogiri': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Locator_kabupaten_wonogiri.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Wonogiri', 'wonogiri']
            },
            'Wonosobo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Locator_kabupaten_wonosobo.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Wonosobo', 'wonosobo']
            },
        },
        'yogyakarta' : {
            'Bantul': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Lokasi_DIY_Kabupaten_Bantul.svg/1280px-Lokasi_DIY_Kabupaten_Bantul.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bantul', 'bantul']
            },
            'Gunungkidul': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Lokasi_DIY_Kabupaten_Gunungkidul.svg/1280px-Lokasi_DIY_Kabupaten_Gunungkidul.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Gunungkidul', 'gunungkidul']
            },
            'Kulon Progo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Lokasi_DIY_Kabupaten_Kulonprogo.svg/1280px-Lokasi_DIY_Kabupaten_Kulonprogo.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kulon Progo', 'Kulon progo', 'kulon progo']
            },
            'Sleman': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lokasi_DIY_Kabupaten_Sleman.svg/1280px-Lokasi_DIY_Kabupaten_Sleman.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sleman', 'sleman']
            },
        },
        'east_java' : {
            'Bangkalan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Locator_kabupaten_bangkalan.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bangkalan', 'bangkalan']
            },
            'Banyuwangi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Locator_kabupaten_banyuwangi.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Banyuwangi', 'banyuwangi']
            },
            'Blitar': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Locator_kabupaten_blitar.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Blitar', 'blitar']
            },
            'Bojonegoro': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Locator_kabupaten_bojonegoro.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bojonegoro', 'bojonegoro']
            },
            'Bondowoso': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/9/95/Locator_kabupaten_bondowoso.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bondowoso', 'bondowoso']
            },
            'Gresik': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Locator_kabupaten_gresik.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Gresik', 'gresik']
            },
            'Jember': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Locator_kabupaten_jember.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Jember', 'jember']
            },
            'Jombang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/1/19/Locator_kabupaten_jombang.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Jombang', 'jombang']
            },
            'Kediri': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Locator_kabupaten_kediri.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kediri', 'kediri']
            },
            'Lamongan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Locator_kabupaten_lamongan.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lamongan', 'lamongan']
            },
            'Lumajang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Locator_kabupaten_lumajang.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lumajang', 'lumajang']
            },
            'Madiun': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Locator_kabupaten_madiun.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Madiun', 'madiun']
            },
            'Magetan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Locator_kabupaten_magetan.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Magetan', 'magetan']
            },
            'Malang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/5/55/Locator_kabupaten_malang.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Malang', 'malang']
            },
            'Mojokerto': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Locator_kabupaten_mojokerto.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mojokerto', 'mojokerto']
            },
            'Nganjuk': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Locator_kabupaten_nganjuk.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Nganjuk', 'nganjuk']
            },
            'Ngawi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Locator_kabupaten_ngawi.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Ngawi', 'ngawi']
            },
            'Pacitan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/8/83/Locator_kabupaten_pacitan.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pacitan', 'pacitan']
            },
            'Pamekasan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Locator_kabupaten_pamekasan.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pamekasan', 'pamekasan']
            },
            'Pasuruan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Locator_kabupaten_pasuruan.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pasuruan', 'pasuruan']
            },
            'Ponorogo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Locator_kabupaten_ponorogo.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Ponorogo', 'ponorogo']
            },
            'Probolinggo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Locator_kabupaten_probolinggo.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Probolinggo', 'probolinggo']
            },
            'Sampang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Locator_kabupaten_sampang.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sampang', 'sampang']
            },
            'Sidoarjo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Locator_kabupaten_sidoarjo.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sidoarjo', 'sidoarjo']
            },
            'Situbondo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Locator_kabupaten_situbondo.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Situbondo', 'situbondo']
            },
            'Sumenep': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Locator_kabupaten_sumenep.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sumenep', 'sumenep']
            },
            'Trenggalek': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/1/17/Locator_kabupaten_trenggalek.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Trenggalek', 'trenggalek']
            },
            'Tuban': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Locator_kabupaten_tuban.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tuban', 'tuban']
            },
            'Tulungagung': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Locator_kabupaten_tulungagung.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tulungagung', 'tulungagung']
            },
        },
        'banten' : {
            'Lebak': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Locator_kabupaten_lebak.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lebak', 'lebak']
            },
            'Pandeglang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Locator_kabupaten_pandeglang.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pandeglang', 'pandeglang']
            },
            'Serang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/7/74/Locator_Kabupaten_Serang.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Serang', 'serang']
            },
            'Tangerang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Locator_kabupaten_tangerang.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tangerang', 'tangerang']
            },
        },
        'bali' : {
            'Badung': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/4/46/Location_Badung_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Badung', 'badung']
            },
            'Bangli': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/8/82/Location_Bangli_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bangli', 'bangli']
            },
            'Buleleng': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/d/de/Location_Buleleng_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Buleleng', 'buleleng']
            },
            'Gianyar': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Location_Gianyar_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Gianyar', 'gianyar']
            },
            'Jembrana': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/b/be/Location_Jembrana_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Jembrana', 'jembrana']
            },
            'Karangasem': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Locator_Karangasem_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Karangasem', 'karangasem']
            },
            'Klungkung': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Location_Klungkung_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Klungkung', 'klungkung']
            },
            'Tabanan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Location_Tabanan_Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tabanan', 'tabanan']
            },
        },
        'west_nusa_tenggara' : {
            'Bima': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lokasi_NTB_Kabupaten_Bima.svg/1280px-Lokasi_NTB_Kabupaten_Bima.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bima', 'bima']
            },
            'Dompu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Lokasi_NTB_Kabupaten_Dompu.svg/1280px-Lokasi_NTB_Kabupaten_Dompu.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Dompu', 'dompu']
            },
            'Lombok Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lokasi_NTB_Kabupaten_Lombok_Barat.svg/1280px-Lokasi_NTB_Kabupaten_Lombok_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lombok Barat (West Lombok)', 'Lombok Barat', 'lombok barat', 'Lombok barat']
            },
            'Lombok Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Lokasi_NTB_Kabupaten_Lombok_Tengah.svg/1280px-Lokasi_NTB_Kabupaten_Lombok_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lombok Tengah (Central Lombok)', 'Lombok Tengah', 'lombok tengah', 'Lombok tengah']
            },
            'Lombok Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lokasi_NTB_Kabupaten_Lombok_Timur.svg/1280px-Lokasi_NTB_Kabupaten_Lombok_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lombok Timur (East Lombok)', 'Lombok Timur', 'lombok timur', 'Lombok timur']
            },
            'Lombok Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Lokasi_NTB_Kabupaten_Lombok_Utara.svg/1280px-Lokasi_NTB_Kabupaten_Lombok_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lombok Utara (North Lombok)', 'Lombok Utara', 'Lombok utara', 'lombok utara']
            },
            'Sumbawa': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Lokasi_NTB_Kabupaten_Sumbawa.svg/1280px-Lokasi_NTB_Kabupaten_Sumbawa.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sumbawa', 'sumbawa']
            },
            'Sumbawa Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lokasi_NTB_Kabupaten_Sumbawa_Barat.svg/1280px-Lokasi_NTB_Kabupaten_Sumbawa_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sumbawa Barat (West Sumbawa)', 'Sumbawa Barat', 'sumbawa barat', 'Sumbawa barat']
            },
        },
        'east_nusa_tengarra' : {
            'Alor': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Alor.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Alor.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Alor', 'alor']
            },
            'Belu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Belu.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Belu.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Belu', 'belu']
            },
            'Ende': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Ende.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Ende.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Ende', 'ende']
            },
            'Flores Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Flores_Timur.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Flores_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Flores Timur (East Flores)', 'Flores Timur', 'Flores timur', 'flores timur']
            },
            'Kupang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Kupang.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Kupang.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kupang', 'kupang']
            },
            'Lembata': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Lembata.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Lembata.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lembata', 'lembata']
            },
            'Malaka': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Malaka.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Malaka.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Malaka', 'malaka']
            },
            'Manggarai': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Manggarai.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Manggarai.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Manggarai', 'manggarai']
            },
            'Manggarai Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Manggarai_Barat.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Manggarai_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Manggarai Barat (West Manggarai)', 'Manggarai Barat', 'manggarai barat', 'Manggarai barat']
            },
            'Manggarai Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Manggarai_Timur.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Manggarai_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Manggarai Timur (East Manggarai)', 'Manggarai Timur', 'manggarai timur', 'Manggarai timur']
            },
            'Nagekeo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Nagekeo.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Nagekeo.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Nagekeo', 'nagekeo']
            },
            'Ngada': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Ngada.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Ngada.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Ngada', 'ngada']
            },
            'Rote Ndao': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Rote_Ndao.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Rote_Ndao.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Rote Ndao', 'rote ndao', 'Rote ndao']
            },
            'Sabu Raijua': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sabu_Raijua.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sabu_Raijua.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sabu Raijua', 'sabu raijua', 'Sabu raijua']
            },
            'Sikka': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sikka.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sikka.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sikka', 'sikka']
            },
            'Sumba Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sumba_Barat.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sumba_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sumba Barat (West Sumba)', 'Sumba Barat', 'sumba barat', 'Sumba barat']
            },
            'Sumba Barat Daya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sumba_Barat_Daya.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sumba_Barat_Daya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sumba Barat Daya (Southwest Sumba)', 'Sumba Barat Daya', 'sumba barat daya', 'Sumba barat daya']
            },
            'Sumba Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sumba_Tengah.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sumba_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sumba Tengah (Central Sumba)', 'Sumba Tengah', 'sumba tengah', 'Sumba tengah']
            },
            'Sumba Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sumba_Timur.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Sumba_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sumba Timur (East Sumba Timur)', 'Sumba Timur', 'sumba timur', 'Sumba timur']
            },
            'Timor Tengah Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Timor_Tengah_Selatan.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Timor_Tengah_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Timor Tengah Selatan (South-Central Timor)', 'Timor Tengah Selatan', 'timor tengah selatan', 'Timor tengah selatan']
            },
            'Timor Tengah Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Lokasi_Nusa_Tenggara_Timur_Kabupaten_Timor_Tengah_Utara.svg/1280px-Lokasi_Nusa_Tenggara_Timur_Kabupaten_Timor_Tengah_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Timor Tengah Utara (North-Central Timor)', 'Timor Tengah Utara', 'timor tengah utara', 'Timor tengah utara']
            },
        },
        'west_kalimantan' : {
            'Bengkayang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Locator_map_of_Bengkayang_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_Bengkayang_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bengkayang', 'bengkayang']
            },
            'Kapuas Hulu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Locator_map_of_Kapuas_Hulu_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_Kapuas_Hulu_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kapuas Hulu', 'Kapuas hulu', 'kapuas hulu']
            },
            'Kayong Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Locator_map_of_North_Kayong_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_North_Kayong_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kayong Utara', 'Kayong utara', 'kayong utara']
            },
            'Ketapang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Locator_map_of_Ketapang_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_Ketapang_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Ketapang', 'ketapang']
            },
            'Kubu Raya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Locator_map_of_Kubu_Raya_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_Kubu_Raya_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kubu Raya', 'kubu raya', 'Kubu raya']
            },
            'Landak': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Locator_map_of_Landak_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_Landak_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Landak', 'landak']
            },
            'Melawi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Locator_map_of_Melawi_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_Melawi_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Melawi', 'melawi']
            },
            'Mempawah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Locator_map_of_Mempawah_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_Mempawah_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mempawah', 'mempawah']
            },
            'Sambas': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Locator_map_of_Sambas_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_Sambas_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sambas', 'sambas']
            },
            'Sanggau': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Locator_map_of_Sanggau_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_Sanggau_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sanggau', 'sanggau']
            },
            'Sekadau': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Locator_map_of_Sekadau_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_Sekadau_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sekadau', 'sekadau']
            },
            'Sintang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Locator_map_of_Sintang_Regency_in_West_Kalimantan.svg/1280px-Locator_map_of_Sintang_Regency_in_West_Kalimantan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sintang', 'sintang']
            },
        },
        'central_kalimantan' : {
            'Barito Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Lokasi_Kalimantan_Tengah_Kabupaten_Barito_Selatan.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Barito_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Barito Selatan (South Barito),', 'Barito Selatan', 'barito xelatan', 'Barito xelatan']
            },
            'Barito Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Lokasi_Kalimantan_Tengah_Kabupaten_Barito_Timur.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Barito_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Barito Timur (East Barito)', 'Barito Timur', 'barito timur', 'Barito timur']
            },
            'Barito Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Lokasi_Kalimantan_Tengah_Kabupaten_Barito_Utara.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Barito_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Barito Utara (North Barito)', 'Barito Utara', 'Barito utara', 'barito utara']
            },
            'Gunung Mas': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Lokasi_Kalimantan_Tengah_Kabupaten_Gunung_Mas.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Gunung_Mas.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Gunung Mas', 'gunung mas', 'Gunung mas']
            },
            'Kapuas': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lokasi_Kalimantan_Tengah_Kabupaten_Kapuas.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Kapuas.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kapuas', 'kapuas']
            },
            'Katingan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Lokasi_Kalimantan_Tengah_Kabupaten_Katingan.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Katingan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Katingan', 'katingan']
            },
            'Kotawaringin Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lokasi_Kalimantan_Tengah_Kabupaten_Kotawaringin_Barat.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Kotawaringin_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kotawaringin Barat (West Kotawaringin)', 'Kotawaringin Barat', 'Kotawaringin barat', 'kotawaringin barat']
            },
            'Kotawaringin Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Lokasi_Kalimantan_Tengah_Kabupaten_Kotawaringin_Timur.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Kotawaringin_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kotawaringin Timur (East Kotawaringin)', 'Kotawaringin Timur', 'kotawaringin timur', 'Kotawaringin timur']
            },
            'Lamandau': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Lokasi_Kalimantan_Tengah_Kabupaten_Lamandau.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Lamandau.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lamandau', 'lamandau']
            },
            'Murung Raya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lokasi_Kalimantan_Tengah_Kabupaten_Murung_Raya.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Murung_Raya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Murung Raya', 'Murung raya', 'murung raya']
            },
            'Pulang Pisau': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lokasi_Kalimantan_Tengah_Kabupaten_Pulang_Pisau.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Pulang_Pisau.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pulang Pisau', 'pulang pisau', 'Pulang pisau']
            },
            'Seruyan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Lokasi_Kalimantan_Tengah_Kabupaten_Seruyan.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Seruyan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Seruyan', 'seruyan']
            },
            'Sukamara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Lokasi_Kalimantan_Tengah_Kabupaten_Sukamara.svg/1280px-Lokasi_Kalimantan_Tengah_Kabupaten_Sukamara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sukamara', 'sukamara']
            },
        },
        'south_kalimantan' : {
            'Balangan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lokasi_Kalimantan_Selatan_Kabupaten_Balangan.svg/1280px-Lokasi_Kalimantan_Selatan_Kabupaten_Balangan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Balangan', 'balangan']
            },
            'Banjar': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lokasi_Kalimantan_Selatan_Kabupaten_Banjar.svg/1280px-Lokasi_Kalimantan_Selatan_Kabupaten_Banjar.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Banjar', 'banjar']
            },
            'Barito Kuala': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lokasi_Kalimantan_Selatan_Kabupaten_Barito_Kuala.svg/1280px-Lokasi_Kalimantan_Selatan_Kabupaten_Barito_Kuala.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Barito Kuala', 'barito kuala', 'Barito kuala']
            },
            'Hulu Sungai Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lokasi_Kalimantan_Selatan_Kabupaten_Hulu_Sungai_Selatan.svg/1280px-Lokasi_Kalimantan_Selatan_Kabupaten_Hulu_Sungai_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Hulu Sungai Selatan (South Hulu Sungai)', 'Hulu Sungai Selatan', 'Hulu sungai delatan', 'hulu sungai selatan']
            },
            'Hulu Sungai Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Lokasi_Kalimantan_Selatan_Kabupaten_Hulu_Sungai_Tengah.svg/1280px-Lokasi_Kalimantan_Selatan_Kabupaten_Hulu_Sungai_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Hulu Sungai Tengah (Central Hulu Sungai)', 'Hulu Sungai Tengah', 'hulu sungai tengah', 'Hulu sungai tengah']
            },
            'Hulu Sungai Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Lokasi_Kalimantan_Selatan_Kabupaten_Hulu_Sungai_Utara.svg/1280px-Lokasi_Kalimantan_Selatan_Kabupaten_Hulu_Sungai_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Hulu Sungai Utara (North Hulu Sungai)', 'hulu sungai utara', 'Hulu sungai utara', 'Hulu Sungai Utara']
            },
            'Kotabaru': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lokasi_Kalimantan_Selatan_Kabupaten_Kotabaru.svg/1280px-Lokasi_Kalimantan_Selatan_Kabupaten_Kotabaru.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kotabaru', 'kotabaru']
            },
            'Tabalong': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lokasi_Kalimantan_Selatan_Kabupaten_Tabalong.svg/1280px-Lokasi_Kalimantan_Selatan_Kabupaten_Tabalong.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tabalong', 'tabalong']
            },
            'Tanah Bumbu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Lokasi_Kalimantan_Selatan_Kabupaten_Tanah_Bumbu.svg/1280px-Lokasi_Kalimantan_Selatan_Kabupaten_Tanah_Bumbu.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tanah Bumbu', 'tanah bumbu', 'Tanah bumbu']
            },
            'Tanah Laut': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Lokasi_Kalimantan_Selatan_Kabupaten_Tanah_Laut.svg/800px-Lokasi_Kalimantan_Selatan_Kabupaten_Tanah_Laut.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tanah Laut', 'Tanah laut',  'tanah laut']
            },
            'Tapin': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Lokasi_Kalimantan_Selatan_Kabupaten_Tapin.svg/1280px-Lokasi_Kalimantan_Selatan_Kabupaten_Tapin.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tapin', 'tapin']
            },
        },
        'east_kalimantan' : {
            'Berau': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lokasi_Kalimantan_Timur_Kabupaten_Berau.svg/800px-Lokasi_Kalimantan_Timur_Kabupaten_Berau.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Berau', 'berau']
            },
            'Kutai Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lokasi_Kalimantan_Timur_Kabupaten_Kutai_Barat.svg/800px-Lokasi_Kalimantan_Timur_Kabupaten_Kutai_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kutai Barat', 'Kutai barat', 'kutai barat']
            },
            'Kutai Kartanegara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Lokasi_Kalimantan_Timur_Kabupaten_Kutai_Kartanegara.svg/800px-Lokasi_Kalimantan_Timur_Kabupaten_Kutai_Kartanegara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kutai Kartanegara', 'Kutai kartanegara', 'kutai kartanegara']
            },
            'Kutai Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Lokasi_Kalimantan_Timur_Kabupaten_Kutai_Timur.svg/800px-Lokasi_Kalimantan_Timur_Kabupaten_Kutai_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kutai Timur (East Kutai)', 'Kutai Timur', 'kutai timur', 'Kutai timur']
            },
            'Mahakam Ulu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Lokasi_Kalimantan_Timur_Kabupaten_Mahakam_Ulu.svg/800px-Lokasi_Kalimantan_Timur_Kabupaten_Mahakam_Ulu.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mahakam Ulu', 'Mahakam ulu', 'mahakam ulu']
            },
            'Paser': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Lokasi_Kalimantan_Timur_Kabupaten_Paser.svg/800px-Lokasi_Kalimantan_Timur_Kabupaten_Paser.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Paser', 'paser']
            },
            'Penajam Paser Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Lokasi_Kalimantan_Timur_Kabupaten_Penajam_Paser_Utara.svg/800px-Lokasi_Kalimantan_Timur_Kabupaten_Penajam_Paser_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Penajam Paser Utara (North Penajam Paser)', 'Penajam Paser Utara', 'Penajam paser utara', 'penajam paser utara']
            },
        },
        'north_kalimantan' : {
            'Bulungan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Lokasi_Kalimantan_Utara_Kabupaten_Bulungan.svg/1024px-Lokasi_Kalimantan_Utara_Kabupaten_Bulungan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bulungan', 'bulungan']
            },
            'Malinau': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lokasi_Kalimantan_Utara_Kabupaten_Malinau.svg/1024px-Lokasi_Kalimantan_Utara_Kabupaten_Malinau.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Malinau', 'malinau']
            },
            'Nunukan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Lokasi_Kalimantan_Utara_Kabupaten_Nunukan.svg/1024px-Lokasi_Kalimantan_Utara_Kabupaten_Nunukan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Nunukan', 'nunukan']
            },
            'Tana Tidung': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Lokasi_Kalimantan_Utara_Kabupaten_Tana_Tidung.svg/1024px-Lokasi_Kalimantan_Utara_Kabupaten_Tana_Tidung.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tana Tidung', 'Tana tidung', 'tana tidung']
            },
        },
        'north_sulawesi' : {
            'Bolaang Mongondow': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Lokasi_Sulawesi_Utara_Kabupaten_Bolaang_Mongondow.svg/1280px-Lokasi_Sulawesi_Utara_Kabupaten_Bolaang_Mongondow.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bolaang Mongondow', 'Bolaang mongondow', 'bolaang mongondow']
            },
            'Bolaang Mongondow Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lokasi_Sulawesi_Utara_Kabupaten_Bolaang_Mongondow_Selatan.svg/1280px-Lokasi_Sulawesi_Utara_Kabupaten_Bolaang_Mongondow_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bolaang Mongondow Selatan (South Bolaang Mongondow)', 'Bolaang Mongondow Selatan', 'Bolaang mongondow selatan', 'bolaang mongondow selatan']
            },
            'Bolaang Mongondow Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Lokasi_Sulawesi_Utara_Kabupaten_Bolaang_Mongondow_Timur.svg/1280px-Lokasi_Sulawesi_Utara_Kabupaten_Bolaang_Mongondow_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bolaang Mongondow Timur (East Bolaang Mongondow)', 'Bolaang Mongondow Timur', 'Bolaang mongondow timur', 'bolaang mongondow timur']
            },
            'Bolaang Mongondow Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lokasi_Sulawesi_Utara_Kabupaten_Bolaang_Mongondow_Utara.svg/1280px-Lokasi_Sulawesi_Utara_Kabupaten_Bolaang_Mongondow_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bolaang Mongondow Utara (North Bolaang Mongondow)', 'Bolaang Mongondow Utara', 'bolaang mongondow utara', 'bolaang mongondow utara']
            },
            'Kepulauan Sangihe': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lokasi_Sulawesi_Utara_Kabupaten_Kepulauan_Sangihe.svg/1280px-Lokasi_Sulawesi_Utara_Kabupaten_Kepulauan_Sangihe.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepulauan Sangihe (Sangihe Islands)', 'Kepulauan Sangihe', 'Kepulauan sangihe', 'kepulauan sangihe', 'Sangihe', 'sangihe']
            },
            'Kepulauan Siau Tagulandang Biaro': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lokasi_Sulawesi_Utara_Kabupaten_Kepulauan_Siau_Tagulandang_Biaro.svg/1280px-Lokasi_Sulawesi_Utara_Kabupaten_Kepulauan_Siau_Tagulandang_Biaro.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepulauan Siau Tagulandang Biaro (Siau Tagulandang Biaro Islands)', 'Kepulauan Siau Tagulandang Biaro', 'Kepulauan siau tagulandang biaro', 'kepulauan siau tagulandang biaro', 'Siau tagulandang biaro', 'Siau Tagulandang Biaro', 'siau tagulandang biaro']
            },
            'Kepulauan Talaud': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lokasi_Sulawesi_Utara_Kabupaten_Kepulauan_Talaud.svg/1280px-Lokasi_Sulawesi_Utara_Kabupaten_Kepulauan_Talaud.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepulauan Talaud (Talaud Islands)', 'Kepulauan Talaud', 'Kepulauan talaud', 'kepulauan talaud', 'Talaud', 'talaud']
            },
            'Minahasa': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lokasi_Sulawesi_Utara_Kabupaten_Minahasa.svg/1280px-Lokasi_Sulawesi_Utara_Kabupaten_Minahasa.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Minahasa', 'minahasa']
            },
            'Minahasa Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Lokasi_Sulawesi_Utara_Kabupaten_Minahasa_Selatan.svg/1280px-Lokasi_Sulawesi_Utara_Kabupaten_Minahasa_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Minahasa Selatan (South Minahasa)', 'Minahasa Selatan', 'minahasa selatan', 'Minahasa selatan']
            },
            'Minahasa Tenggara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Lokasi_Sulawesi_Utara_Kabupaten_Minahasa_Tenggara.svg/1280px-Lokasi_Sulawesi_Utara_Kabupaten_Minahasa_Tenggara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Minahasa Tenggara (South-East Minahasa)', 'Minahasa Tenggara', 'Minahasa tenggara', 'minahasa tenggara']
            },
            'Minahasa Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lokasi_Sulawesi_Utara_Kabupaten_Minahasa_Utara.svg/1280px-Lokasi_Sulawesi_Utara_Kabupaten_Minahasa_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Minahasa Utara (North Minahasa)', 'Minahasa Utara', 'Minahasa utara', 'minahasa utara']
            },
        },
        'central_sulawesi' : {
            'Banggai': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Locator_Kabupaten_Banggai.svg/1024px-Locator_Kabupaten_Banggai.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Banggai', 'banggai']
            },
            'Banggai Kepulauan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Locator_Kabupaten_Banggai_Kepulauan.svg/1024px-Locator_Kabupaten_Banggai_Kepulauan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Banggai Kepulauan (Banggai Islands)', 'Banggai Kepulauan', 'banggai kepulauan', 'Banggai kepulauan']
            },
            'Banggai Laut': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Locator_Kabupaten_Banggai_Laut.svg/1024px-Locator_Kabupaten_Banggai_Laut.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Banggai Laut (Banggai Sea)', 'Banggai Laut', 'banggai laut', 'Banggai laut']
            },
            'Buol': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Locator_Kabupaten_Buol.svg/1024px-Locator_Kabupaten_Buol.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Buol', 'buol']
            },
            'Donggala': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Locator_Kabupaten_Donggala.svg/1024px-Locator_Kabupaten_Donggala.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Donggala', 'donggala']
            },
            'Morowali': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Locator_Kabupaten_Morowali.svg/1024px-Locator_Kabupaten_Morowali.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Morowali', 'morowali']
            },
            'Morowali Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Locator_Kabupaten_Morowali_Utara.svg/1024px-Locator_Kabupaten_Morowali_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Morowali Utara (North Morowali)', 'Morowali Utara', 'morowali utara', 'Morowali utara']
            },
            'Parigi Moutong': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Locator_Kabupaten_Parigi_Moutong.svg/1024px-Locator_Kabupaten_Parigi_Moutong.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Parigi Moutong', 'parigi moutong', 'Parigi moutong']
            },
            'Poso': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Locator_Kabupaten_Poso.svg/1024px-Locator_Kabupaten_Poso.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Poso', 'poso']
            },
            'Sigi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Locator_Kabupaten_Sigi.svg/1024px-Locator_Kabupaten_Sigi.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sigi', 'sigi']
            },
            'Tojo Una-Una': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Locator_Kabupaten_Tojo_Una-Una.svg/1024px-Locator_Kabupaten_Tojo_Una-Una.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tojo Una-Una', 'Tojo una-una', 'tojo una-una', 'Tojo una una', 'tojo una una', 'Tojo una una']
            },
            'Tolitoli': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Locator_Kabupaten_Tolitoli.svg/1024px-Locator_Kabupaten_Tolitoli.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tolitoli', 'tolitoli']
            },
        },
        'south_sulawesi' : {
            'Bantaeng': {
                'image_url': 'https://i.postimg.cc/RF0Yq2j1/Locator-Bantaeng-Regency-svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bantaeng', 'bantaeng']
            },
            'Barru': {
                'image_url': 'https://i.postimg.cc/V6HVtD8x/Locator-Barru-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Barru', 'barru']
            },
            'Bone': {
                'image_url': 'https://i.postimg.cc/T1LHJg2p/Locator-Bone-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bone', 'bone']
            },
            'Bulukumba': {
                'image_url': 'https://i.postimg.cc/cCpk9C6T/Locator-Bulukumba-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bulukumba', 'bulukumba']
            },
            'Enrekang': {
                'image_url': 'https://i.postimg.cc/9XDWnkrq/Locator-Enregank-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Enrekang', 'enrekang']
            },
            'Gowa': {
                'image_url': 'https://i.postimg.cc/fW1wnv9q/Locator-Gowa-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Gowa', 'gowa']
            },
            'Jeneponto': {
                'image_url': 'https://i.postimg.cc/GhYbcsPL/Locator-Jeneponto-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Jeneponto', 'jeneponto']
            },
            'Kepulauan Selayar': {
                'image_url': 'https://i.postimg.cc/CLjVypYd/Locator-Selayar-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepulauan Selayar (Selayar Islands)', 'Kepulauan Selayar', 'kepulauan selayar', 'Kepulauan selayar']
            },
            'Luwu': {
                'image_url': 'https://i.postimg.cc/mrZ4NXvk/Locator-Luwu-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Luwu', 'luwu']
            },
            'Luwu Timur': {
                'image_url': 'https://i.postimg.cc/g0MWMypD/Locator-Luwu-Timur-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Luwu Timur (East Luwu)', 'Luwu Timur', 'Luwu timur', 'luwu timur']
            },
            'Luwu Utara': {
                'image_url': 'https://i.postimg.cc/NM5wZyfw/Locator-Luwu-Utara-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Luwu Utara (North Luwu)', 'Luwu Utara', 'Luwu u tara', 'luwu utara']
            },
            'Maros': {
                'image_url': 'https://i.postimg.cc/zvhYX9gt/Locator-Maros-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Maros', 'maros']
            },
            'Pangkajene dan Kepulauan': {
                'image_url': 'https://i.postimg.cc/MZfSDjF7/Locator-Pangkajene-Kepulauan-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pangkajene dan Kepulauan (Pangkajene and Islands)', 'Pangkep', 'pangkep', 'Pangkajene dan Kepulauan', 'pangkajene dan kepulauan', 'Pangkajene dan kepulauan', 'Pangkajene dan', 'pangkajene dan', 'Pangkajene and', 'Pangkajene and']
            },
            'Pinrang': {
                'image_url': 'https://i.postimg.cc/3JMHbJsP/Locator-Pinrang-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pinrang', 'pinrang']
            },
            'Sidenreng Rappang': {
                'image_url': 'https://i.postimg.cc/qv4H4DMw/Locator-Sidenreng-Rappang-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sidenreng Rappang', 'sidenreng rappang', 'Sidenreng rappang']
            },  
            'Sinjai': {
                'image_url': 'https://i.postimg.cc/NjDqM8Kc/Locator-Sinjai-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sinjai', 'sinjai']
            },
            'Soppeng': {
                'image_url': 'https://i.postimg.cc/d00MT7CT/Locator-Soppeng-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Soppeng', 'soppeng']
            },
            'Takalar': {
                'image_url': 'https://i.postimg.cc/QMY2gXgY/Locator-Takalar-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Takalar', 'takalar']
            },
            'Tana Toraja': {
                'image_url': 'https://i.postimg.cc/26qP2P2k/Locator-Tana-Toraja-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tana Toraja', 'Tana toraja', 'tana toraja']
            },
            'Toraja Utara': {
                'image_url': 'https://i.postimg.cc/BbHRGHrR/Locator-Toraja-Utara-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Toraja Utara (North Toraja)', 'Toraja Utara', 'Toraja utara', 'toraja utara']
            },
            'Wajo': {
                'image_url': 'https://i.postimg.cc/KcM6Lh1Q/Locator-Wajo-Regency.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Wajo', 'wajo']
            },
        },
        'southeast_sulawesi' : {
            'Bombana': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Lokasi_Sulawesi_Tenggara_Kabupaten_Bombana.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Bombana.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bombana', 'bombana']
            },
            'Buton': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Lokasi_Sulawesi_Tenggara_Kabupaten_Buton.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Buton.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Buton', 'buton']
            },
            'Buton Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lokasi_Sulawesi_Tenggara_Kabupaten_Buton_Selatan.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Buton_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Buton Selatan (South Buton)', 'Buton Selatan', 'Buton selatan', 'buton selatan']
            },
            'Buton Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lokasi_Sulawesi_Tenggara_Kabupaten_Buton_Tengah.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Buton_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Buton Tengah (Central Buton)', 'Buton Tengah', 'Buton tengah', 'buton tengah']
            },
            'Buton Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lokasi_Sulawesi_Tenggara_Kabupaten_Buton_Utara.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Buton_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Buton Utara (North Buton)', 'Buton Utara', 'buton utara', 'Buton utara']
            },
            'Kolaka': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Lokasi_Sulawesi_Tenggara_Kabupaten_Kolaka.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Kolaka.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kolaka', 'kolaka']
            },
            'Kolaka Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lokasi_Sulawesi_Tenggara_Kabupaten_Kolaka_Timur.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Kolaka_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kolaka Timur (East Kolaka)', 'Kolaka Timur', 'Kolaka Timur', 'kolaka timur']
            },
            'Kolaka Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Lokasi_Sulawesi_Tenggara_Kabupaten_Kolaka_Utara.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Kolaka_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kolaka Utara (North Kolaka)', 'Kolaka Utara', 'Kolaka utara', 'kolaka utara']
            },
            'Konawe': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lokasi_Sulawesi_Tenggara_Kabupaten_Konawe.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Konawe.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Konawe', 'konawe']
            },
            'Konawe Kepulauan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lokasi_Sulawesi_Tenggara_Kabupaten_Konawe_Kepulauan.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Konawe_Kepulauan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Konawe Kepulauan (Konawe Islands)', 'Konawe Kepulauan', 'Konawe kepulauan', 'konawe kepulauan']
            },
            'Konawe Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lokasi_Sulawesi_Tenggara_Kabupaten_Konawe_Selatan.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Konawe_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Konawe Selatan (South Konawe)', 'Konawe Selatan', 'konawe selatan', 'Konawe selatan']
            },
            'Konawe Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Lokasi_Sulawesi_Tenggara_Kabupaten_Konawe_Utara.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Konawe_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Konawe Utara (North Konawe)', 'Konawe Utara', 'Konawe utara', 'konawe utara']
            },
            'Muna': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lokasi_Sulawesi_Tenggara_Kabupaten_Muna.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Muna.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Muna', 'muna']
            },
            'Muna Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Lokasi_Sulawesi_Tenggara_Kabupaten_Muna_Barat.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Muna_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Muna Barat (West Muna)', 'Muna Barat', 'Muna barat', 'muna barat']
            },
            'Wakatobi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lokasi_Sulawesi_Tenggara_Kabupaten_Wakatobi.svg/1280px-Lokasi_Sulawesi_Tenggara_Kabupaten_Wakatobi.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Wakatobi', 'wakatobi']
            },
        },
        'gorontalo' : {
            'Boalemo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lokasi_Gorontalo_Kabupaten_Boalemo.svg/1280px-Lokasi_Gorontalo_Kabupaten_Boalemo.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Boalemo', 'boalemo']
            },
            'Bone Bolango': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Lokasi_Gorontalo_Kabupaten_Bone_Bolango.svg/1280px-Lokasi_Gorontalo_Kabupaten_Bone_Bolango.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Bone Bolango', 'Bone bolango', 'bone bolango']
            },
            'Gorontalo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Lokasi_Gorontalo_Kabupaten_Gorontalo.svg/1280px-Lokasi_Gorontalo_Kabupaten_Gorontalo.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Gorontalo', 'gorontalo']
            },
            'Gorontalo Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lokasi_Gorontalo_Kabupaten_Gorontalo_Utara.svg/1280px-Lokasi_Gorontalo_Kabupaten_Gorontalo_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Gorontalo Utara (North Gorontalo)', 'Gorontalo Utara', 'Gorontalo utara', 'gorontalo utara']
            },
            'Pohuwato': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Lokasi_Gorontalo_Kabupaten_Pohuwato.svg/1280px-Lokasi_Gorontalo_Kabupaten_Pohuwato.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pohuwato', 'pohuwato']
            },
        },
        'west_sulawesi' : {
            'Majene': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/76.05.00_SulawesiBarat_Majene.svg/800px-76.05.00_SulawesiBarat_Majene.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Majene', 'majene']
            },
            'Mamasa': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/76.03.00_SulawesiBarat_Mamasa.svg/800px-76.03.00_SulawesiBarat_Mamasa.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mamasa', 'mamasa']
            },
            'Mamuju': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/76.02.00_SulawesiBarat_Mamuju.svg/800px-76.02.00_SulawesiBarat_Mamuju.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mamuju', 'mamuju']
            },
            'Mamuju Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/76.06.00_SulawesiBarat_Mamuju_Tengah.svg/800px-76.06.00_SulawesiBarat_Mamuju_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mamuju Tengah (Central Mamuju)', 'Mamuju Tengah', 'Mamuju tengah', 'mamuju tengah']
            },
            'Pasangkayu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/76.01.00_SulawesiBarat_Pasangkayu_Mamuju_Utara.svg/800px-76.01.00_SulawesiBarat_Pasangkayu_Mamuju_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pasangkayu', 'pasangkayu']
            },
            'Polewali Mandar': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/76.04.00_SulawesiBarat_Polewali_Mandar.svg/800px-76.04.00_SulawesiBarat_Polewali_Mandar.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Polewali Mandar', 'Polewali mandar', 'polewali mandar']
            },
        },
        'maluku_islands' : {
            'Buru': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Locator_map_of_Buru_Regency_in_Maluku.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Buru', 'buru']
            },
            'Buru Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Locator_map_of_South_Buru_Regency_in_Maluku.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Buru Selatan (South Buru)', 'Buru Selatan', 'Buru selatan', 'buru selatan']
            },
            'Kepulauan Aru': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Locator_map_of_Aru_Islands_Regency_in_Maluku.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepulauan Aru (Aru Islands)', 'Kepulauan Aru', 'kepulauan aru', 'Kepulauan aru', 'aru', 'Aru']
            },
            'Kepulauan Tanimbar': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Locator_map_of_Tanimbar_Islands_Regency_in_Maluku.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepulauan Tanimbar (Tanimbar Islands)', 'Kepulauan Tanimbar', 'kepulauan tanimbar', 'Kepulauan tanimbar', 'tanimbar', 'Tanimbar']
            },
            'Maluku Barat Daya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Locator_map_of_Southwest_Maluku_Regency_in_Maluku.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Maluku Barat Daya (Southwest Maluku)', 'Maluku Barat Daya', 'Maluku barat daya', 'maluku barat daya']
            },
            'Maluku Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/7/71/Locator_map_of_Central_Maluku_Regency_in_Maluku.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Maluku Tengah (Central Maluku)', 'Maluku Tengah', 'maluku tengah', 'Maluku tengah']
            },
            'Maluku Tenggara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Locator_map_of_Southeast_Maluku_Regency_in_Maluku.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Maluku Tenggara (Southeast Maluku)', 'Maluku Tenggara', 'Maluku tenggara', 'maluku tenggara']
            },
            'Seram Bagian Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Locator_map_of_West_Seram_Regency_in_Maluku.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Seram Bagian Barat (West Seram)', 'Seram barat', 'Seram Bagian Barat', 'seram bagian barat', 'Seram bagian barat', 'seram barat', 'Seram Barat']
            },
            'Seram Bagian Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/3/39/Locator_map_of_East_Seram_Regency_in_Maluku.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Seram Bagian Timur (East Seram)', 'Seram Bagian Timur', 'seram bagian timur', 'Seram bagian timur', 'Seram Timur', 'seram timur', 'Seram timur']
            },
        },
        'north_maluku' : {
            'Halmahera Barat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/82.01.00_MalukuUtara_Halmahera_Barat.svg/800px-82.01.00_MalukuUtara_Halmahera_Barat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Halmahera Barat (West)', 'Halmahera Barat', 'Halmahera Barat', 'halmahera barat']
            },
            'Halmahera Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/82.04.00_MalukuUtara_Halmahera_Selatan.svg/800px-82.04.00_MalukuUtara_Halmahera_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Halmahera Selatan (South Halmahera)', 'Halmahera Selatan', 'Halmahera selatan', 'halmahera selatan']
            },
            'Halmahera Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/82.02.00_MalukuUtara_Halmahera_Tengah.svg/800px-82.02.00_MalukuUtara_Halmahera_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Halmahera Tengah (Central Halmahera)', 'Halmahera Tengah', 'halmahera tengah', 'Halmahera tengah']
            },
            'Halmahera Timur': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/82.06.00_MalukuUtara_Halmahera_Timur.svg/800px-82.06.00_MalukuUtara_Halmahera_Timur.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Halmahera Timur (East Halmahera)', 'Halmahera Timur', 'Halmahera timur', 'halmahera timur']
            },
            'Halmahera Utara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/82.03.00_MalukuUtara_Halmahera_Utara.svg/800px-82.03.00_MalukuUtara_Halmahera_Utara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Halmahera Utara (North Halmahera)', 'Halmahera Utara', 'halmahera utara', 'Halmahera utara']
            },
            'Kepulauan Sula': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/82.05.00_MalukuUtara_Kepulauan_Sula.svg/800px-82.05.00_MalukuUtara_Kepulauan_Sula.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepulauan Sula (Sula Islands)', 'Kepulauan Sula', 'kepulauan sula', 'Kepulauan sula', 'sula', 'Sula']
            },
            'Pulau Morotai': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/82.07.00_MalukuUtara_Morotai.svg/800px-82.07.00_MalukuUtara_Morotai.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pulau Morotai (Morotai Island)', 'Pulau Morotai', 'Pulau morotai', 'pulau morotai', 'Morotai', 'morotai']
            },
            'Pulau Taliabu': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/82.08.00_MalukuUtara_Taliabu.svg/800px-82.08.00_MalukuUtara_Taliabu.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pulau Taliabu (Taliabu Island)', 'Pulau Taliabu', 'Pulau taliabu', 'pulau taliabu', 'Taliabu', 'taliabu']
            },
        },
        'papua_island' : {
            'Biak Numfor': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lokasi_Papua_Kabupaten_Biak_Numfor.svg/1280px-Lokasi_Papua_Kabupaten_Biak_Numfor.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Biak Numfor', 'biak numfor', 'Biak numfor']
            },
            'Jayapura': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Lokasi_Papua_Kabupaten_Jayapura.svg/1280px-Lokasi_Papua_Kabupaten_Jayapura.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Jayapura', 'jayapura']
            },
            'Keerom': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Lokasi_Papua_Kabupaten_Keerom.svg/1280px-Lokasi_Papua_Kabupaten_Keerom.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Keerom', 'keerom']
            },
            'Kepulauan Yapen': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Lokasi_Papua_Kabupaten_Kepulauan_Yapen.svg/1280px-Lokasi_Papua_Kabupaten_Kepulauan_Yapen.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kepulauan Yapen (Yapen Islands)', 'Kepulauan Yapen', 'kepulauan yapen', 'Kepulauan yapen', 'Yapen', 'yapen']
            },
            'Mamberamo Raya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lokasi_Papua_Kabupaten_Mamberamo_Raya.svg/1280px-Lokasi_Papua_Kabupaten_Mamberamo_Raya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mamberamo Raya', 'Mamberamo raya', 'mamberamo raya']
            },
            'Sarmi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lokasi_Papua_Kabupaten_Sarmi.svg/1280px-Lokasi_Papua_Kabupaten_Sarmi.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sarmi', 'sarmi']
            },
            'Supiori': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lokasi_Papua_Kabupaten_Supiori.svg/1280px-Lokasi_Papua_Kabupaten_Supiori.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Supiori', 'supiori']
            },
            'Waropen': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Lokasi_Papua_Kabupaten_Waropen.svg/1280px-Lokasi_Papua_Kabupaten_Waropen.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Waropen', 'waropen']
            },
        },
        'west_papua' : {
            'Fakfak': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Lokasi_Papua_Barat_Kabupaten_Fakfak.svg/800px-Lokasi_Papua_Barat_Kabupaten_Fakfak.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Fakfak', 'fakfak']
            },
            'Kaimana': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lokasi_Papua_Barat_Kabupaten_Kaimana.svg/800px-Lokasi_Papua_Barat_Kabupaten_Kaimana.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Kaimana', 'kaimana']
            },
            'Manokwari': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lokasi_Papua_Barat_Kabupaten_Manokwari.svg/800px-Lokasi_Papua_Barat_Kabupaten_Manokwari.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Manokwari', 'manokwari']
            },
            'Manokwari Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Lokasi_Papua_Barat_Kabupaten_Manokwari_Selatan.svg/800px-Lokasi_Papua_Barat_Kabupaten_Manokwari_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Manokwari Selatan (South Manokwari)', 'Manokwari Selatan', 'Manokwari selatan', 'manokwari selatan']
            },
            'Pegunungan Arfak': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lokasi_Papua_Barat_Kabupaten_Pegunungan_Arfak.svg/800px-Lokasi_Papua_Barat_Kabupaten_Pegunungan_Arfak.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pegunungan Arfak (Arfak Mountain)', 'Pegunungan Arfak', 'pegunungan arfak', 'Pegunungan arfak', 'Arfak', 'arfak']
            },
            'Teluk Bintuni': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Lokasi_Papua_Barat_Kabupaten_Teluk_Bintuni.svg/800px-Lokasi_Papua_Barat_Kabupaten_Teluk_Bintuni.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Teluk Bintuni (Bintuni Bay)', 'Teluk Bintuni', 'teluk bintuni', 'Teluk bintuni', 'Bintuni', 'bintuni']
            },
            'Teluk Wondama': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Lokasi_Papua_Barat_Kabupaten_Teluk_Wondama.svg/800px-Lokasi_Papua_Barat_Kabupaten_Teluk_Wondama.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Teluk Wondama (Wondama Bay)', 'Teluk Wondama', 'teluk wondama', 'Teluk wondama', 'Wondama', 'wondama']
            },
        },
        'south_papua' : {
            'Asmat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Lokasi_Papua_Selatan_Kabupaten_Asmat.svg/1024px-Lokasi_Papua_Selatan_Kabupaten_Asmat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Asmat', 'asmat']
            },
            'Boven Digoel': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Lokasi_Papua_Selatan_Kabupaten_Boven_Digoel.svg/1024px-Lokasi_Papua_Selatan_Kabupaten_Boven_Digoel.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Boven Digoel', 'Boven digoel', 'boven digoel']
            },
            'Mappi': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Lokasi_Papua_Selatan_Kabupaten_Mappi.svg/1024px-Lokasi_Papua_Selatan_Kabupaten_Mappi.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mappi', 'mappi']
            },
            'Merauke': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Lokasi_Papua_Selatan_Kabupaten_Merauke.svg/1024px-Lokasi_Papua_Selatan_Kabupaten_Merauke.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Merauke', 'merauke']
            },
        },
        'central_papua' : {
            'Deiyai': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lokasi_Papua_Tengah_Kabupaten_Deiyai.svg/1280px-Lokasi_Papua_Tengah_Kabupaten_Deiyai.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Deiyai', 'deiyai']
            },
            'Dogiyai': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lokasi_Papua_Tengah_Kabupaten_Dogiyai.svg/1280px-Lokasi_Papua_Tengah_Kabupaten_Dogiyai.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Dogiyai', 'dogiyai']
            },
            'Intan Jaya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lokasi_Papua_Tengah_Kabupaten_Intan_Jaya.svg/1280px-Lokasi_Papua_Tengah_Kabupaten_Intan_Jaya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Intan Jaya', 'Intan jaya', 'intan jaya']
            },
            'Mimika': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lokasi_Papua_Tengah_Kabupaten_Mimika.svg/1280px-Lokasi_Papua_Tengah_Kabupaten_Mimika.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mimika', 'mimika']
            },
            'Nabire': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Lokasi_Papua_Tengah_Kabupaten_Nabire.svg/1280px-Lokasi_Papua_Tengah_Kabupaten_Nabire.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Nabire', 'nabire']
            },
            'Paniai': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lokasi_Papua_Tengah_Kabupaten_Paniai.svg/1280px-Lokasi_Papua_Tengah_Kabupaten_Paniai.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Paniai', 'paniai']
            },
            'Puncak': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lokasi_Papua_Tengah_Kabupaten_Puncak.svg/1280px-Lokasi_Papua_Tengah_Kabupaten_Puncak.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Puncak', 'puncak']
            },
            'Puncak Jaya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Lokasi_Papua_Tengah_Kabupaten_Puncak_Jaya.svg/1280px-Lokasi_Papua_Tengah_Kabupaten_Puncak_Jaya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Puncak Jaya', 'Puncak jaya', 'puncak jaya']
            },
        },
        'papua_mountains' : {
            'Jayawijaya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Lokasi_Papua_Pegunungan_Kabupaten_Jayawijaya.svg/1280px-Lokasi_Papua_Pegunungan_Kabupaten_Jayawijaya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Jayawijaya', 'jayawijaya']
            },
            'Lanny Jaya': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lokasi_Papua_Pegunungan_Kabupaten_Lanny_Jaya.svg/1280px-Lokasi_Papua_Pegunungan_Kabupaten_Lanny_Jaya.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Lanny Jaya', 'Lanny jaya', 'lanny jaya']
            },
            'Mamberamo Tengah': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lokasi_Papua_Pegunungan_Kabupaten_Mamberamo_Tengah.svg/1280px-Lokasi_Papua_Pegunungan_Kabupaten_Mamberamo_Tengah.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Mamberamo Tengah', 'Mamberamo tengah', 'mamberamo tengah']
            },
            'Nduga': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lokasi_Papua_Pegunungan_Kabupaten_Nduga.svg/1280px-Lokasi_Papua_Pegunungan_Kabupaten_Nduga.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Nduga', 'nduga']
            },
            'Pegunungan Bintang': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lokasi_Papua_Pegunungan_Kabupaten_Pegunungan_Bintang.svg/1280px-Lokasi_Papua_Pegunungan_Kabupaten_Pegunungan_Bintang.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Pegunungan Bintang (Bintang Mountains)', 'Pegunungan Bintang', 'Pegunungan bintang', 'pegunungan bintang', 'Bintang', 'bintang']
            },
            'Tolikara': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lokasi_Papua_Pegunungan_Kabupaten_Tolikara.svg/1280px-Lokasi_Papua_Pegunungan_Kabupaten_Tolikara.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tolikara', 'tolikara']
            },
            'Yalimo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lokasi_Papua_Pegunungan_Kabupaten_Yalimo.svg/1280px-Lokasi_Papua_Pegunungan_Kabupaten_Yalimo.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Yalimo', 'yalimo']
            },
            'Yahukimo': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Lokasi_Papua_Pegunungan_Kabupaten_Yahukimo.svg/1280px-Lokasi_Papua_Pegunungan_Kabupaten_Yahukimo.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Yahukimo', 'yahukimo']
            },
        },
        'southwest_papua' : {
            'Maybrat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Lokasi_Papua_Barat_Daya_Kabupaten_Maybrat.svg/1280px-Lokasi_Papua_Barat_Daya_Kabupaten_Maybrat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Maybrat', 'maybrat']
            },
            'Raja Ampat': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Lokasi_Papua_Barat_Daya_Kabupaten_Raja_Ampat.svg/1280px-Lokasi_Papua_Barat_Daya_Kabupaten_Raja_Ampat.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Raja Ampat', 'Raja ampat', 'raja aAmpat']
            },
            'Sorong': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Lokasi_Papua_Barat_Daya_Kabupaten_Sorong.svg/1280px-Lokasi_Papua_Barat_Daya_Kabupaten_Sorong.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sorong', 'sorong']
            },
            'Sorong Selatan': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lokasi_Papua_Barat_Daya_Kabupaten_Sorong_Selatan.svg/1280px-Lokasi_Papua_Barat_Daya_Kabupaten_Sorong_Selatan.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Sorong Selatan (South Sorong)', 'Sorong Selatan', 'Sorong selatan', 'sorong selatan']
            },
            'Tambrauw': {
                'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Lokasi_Papua_Barat_Daya_Kabupaten_Tambrauw.svg/1280px-Lokasi_Papua_Barat_Daya_Kabupaten_Tambrauw.svg.png',
                'question': "What is the name of this kabupaten?",
                'answer': ['Tambrauw', 'tambrauw']
            },
        },
        
};