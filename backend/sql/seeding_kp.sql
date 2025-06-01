INSERT INTO information_comp (informationid, informationdescription, informationtitle, objectname, modulesequence) VALUES
    ('1219ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Vaksin Sinovac menggunakan virus yang dilemahkan dan telah terbukti efektif untuk mencegah gejala parah COVID-19. Diberikan dalam 2 dosis dengan jarak 14-28 hari', 'Vaksin COVID-19 (Sinovac)', 'healthcare.information.core.InformationComponent', NULL),
    ('2119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Vaksin Sinovac menggunakan virus yang dilemahkan dan telah terbukti efektif untuk mencegah gejala parah COVID-19. Diberikan dalam 2 dosis dengan jarak 14-28 hari', 'Vaksin COVID-19 (Sinovac)', 'healthcare.information.core.InformationComponent', 'information_impl, information_vaccineinfo'),
    ('1319ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Vaksin polio suntik (IPV) memberikan kekebalan terhadap virus polio tipe 1, 2, dan 3. Diberikan pada usia 2, 3, dan 4 bulan sebagai bagian dari imunisasi dasar bayi.', 'Vaksin Polio (IPV - Inactivated Polio Vaccine)', 'healthcare.information.core.InformationComponent', NULL),
    ('3119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Vaksin polio suntik (IPV) memberikan kekebalan terhadap virus polio tipe 1, 2, dan 3. Diberikan pada usia 2, 3, dan 4 bulan sebagai bagian dari imunisasi dasar bayi.', 'Vaksin Polio (IPV - Inactivated Polio Vaccine)', 'healthcare.information.core.InformationComponent', 'information_impl, information_vaccineinfo'),
    ('1419ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Vaksin influenza musiman melindungi dari tiga atau empat jenis virus influenza yang umum selama musim flu. Dianjurkan diberikan setiap tahun, terutama pada lansia dan kelompok risiko tinggi.', 'Vaksin Influenza (Musiman)', 'healthcare.information.core.InformationComponent', NULL),
    ('4119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Vaksin influenza musiman melindungi dari tiga atau empat jenis virus influenza yang umum selama musim flu. Dianjurkan diberikan setiap tahun, terutama pada lansia dan kelompok risiko tinggi.', 'Vaksin Influenza (Musiman)', 'healthcare.information.core.InformationComponent', 'information_impl, information_vaccineinfo'),
    ('1519ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Vaksin TT diberikan untuk mencegah infeksi tetanus, terutama pada ibu hamil dan korban luka terbuka. Biasanya diberikan dalam 5 dosis seumur hidup.', 'Vaksin Tetanus (Tetanus Toxoid)', 'healthcare.information.core.InformationComponent', NULL),
    ('5119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Vaksin TT diberikan untuk mencegah infeksi tetanus, terutama pada ibu hamil dan korban luka terbuka. Biasanya diberikan dalam 5 dosis seumur hidup.', 'Vaksin Tetanus (Tetanus Toxoid)', 'healthcare.information.core.InformationComponent', 'information_impl, information_vaccineinfo'),
    ('1619ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Vaksin Hepatitis B melindungi dari infeksi virus hepatitis B yang menyerang hati. Dosis pertama diberikan dalam 24 jam setelah lahir, lalu dilanjutkan 2-3 kali lagi.', 'Vaksin Hepatitis B (HB)', 'healthcare.information.core.InformationComponent', NULL),
    ('6119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Vaksin Hepatitis B melindungi dari infeksi virus hepatitis B yang menyerang hati. Dosis pertama diberikan dalam 24 jam setelah lahir, lalu dilanjutkan 2-3 kali lagi.', 'Vaksin Hepatitis B (HB)', 'healthcare.information.core.InformationComponent', 'information_impl, information_vaccineinfo')
ON CONFLICT (informationid) DO NOTHING;

INSERT INTO information_impl (informationid) VALUES 
    ('2119ff33-6dd2-4c0a-b113-a90ee32a01ca'),
    ('3119ff33-6dd2-4c0a-b113-a90ee32a01ca'),
    ('4119ff33-6dd2-4c0a-b113-a90ee32a01ca'),
    ('5119ff33-6dd2-4c0a-b113-a90ee32a01ca'),
    ('6119ff33-6dd2-4c0a-b113-a90ee32a01ca')
ON CONFLICT (informationid) DO NOTHING;

INSERT INTO information_vaccineinfo (informationid, record_informationid, base_component_id, recordname, schedule, type, vaccinationlocation) VALUES 
    ('1219ff33-6dd2-4c0a-b113-a90ee32a01ca', '2119ff33-6dd2-4c0a-b113-a90ee32a01ca', '2119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'healthcare.information.core.InformationImpl', '2025-06-10 08:00 - 14:00', 'Inactivated Virus Vaccine', 'GOR Senayan, Jakarta Pusat'),
    ('1319ff33-6dd2-4c0a-b113-a90ee32a01ca', '3119ff33-6dd2-4c0a-b113-a90ee32a01ca', '3119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'healthcare.information.core.InformationImpl', '2025-08-01 09:00 - 13:00', 'Inactivated Virus Vaccine', 'Posyandu Melati RW 05, Bandung'),
    ('1419ff33-6dd2-4c0a-b113-a90ee32a01ca', '4119ff33-6dd2-4c0a-b113-a90ee32a01ca', '4119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'healthcare.information.core.InformationImpl', '2025-07-20 08:30 - 11:30', 'Inactivated Virus Vaccine', 'Klinik Pratama Sehat Mandiri, Yogyakarta'),
    ('1519ff33-6dd2-4c0a-b113-a90ee32a01ca', '5119ff33-6dd2-4c0a-b113-a90ee32a01ca', '5119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'healthcare.information.core.InformationImpl', '2025-07-05 08:00 - 12:00', 'Toxoid Vaccine', 'Puskesmas Sukmajaya, Depok'),
    ('1619ff33-6dd2-4c0a-b113-a90ee32a01ca', '6119ff33-6dd2-4c0a-b113-a90ee32a01ca', '6119ff33-6dd2-4c0a-b113-a90ee32a01ca', 'healthcare.information.core.InformationImpl', '2025-06-28 10:00 - 14:00', 'Recombinant Vaccine', 'RSIA Bunda, Jakarta Pusat')
ON CONFLICT (informationid) DO NOTHING;