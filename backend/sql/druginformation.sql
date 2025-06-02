INSERT INTO information_comp (informationid, informationdescription, informationtitle, objectname, modulesequence) VALUES
    ('9919ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Obat pereda nyeri dan penurun demam. Umumnya digunakan untuk sakit kepala, nyeri otot, dan demam', 'Paracetamol', 'healthcare.information.core.InformationComponent', NULL),
    ('2119ff33-6dd2-4c0a-b113-a90ee32a0abc', 'Obat pereda nyeri dan penurun demam. Umumnya digunakan untuk sakit kepala, nyeri otot, dan demam', 'Paracetamol', 'healthcare.information.core.InformationComponent', 'information_impl, information_druginformation'),
    ('9819ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Antibiotik golongan penisilin yang digunakan untuk mengobati infeksi bakteri seperti infeksi saluran pernapasan, telinga, dan saluran kemih', 'Amoxicillin', 'healthcare.information.core.InformationComponent', NULL),
    ('3119ff33-6dd2-4c0a-b113-a90ee32a0def', 'Antibiotik golongan penisilin yang digunakan untuk mengobati infeksi bakteri seperti infeksi saluran pernapasan, telinga, dan saluran kemih', 'Amoxicillin', 'healthcare.information.core.InformationComponent', 'information_impl, information_druginformation'),
    ('9719ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Obat anti-inflamasi non-steroid (NSAID) yang digunakan untuk mengatasi nyeri, peradangan, dan demam.', 'Ibuprofen', 'healthcare.information.core.InformationComponent', NULL),
    ('4119ff33-6dd2-4c0a-b113-a90ee32a0acb', 'Obat anti-inflamasi non-steroid (NSAID) yang digunakan untuk mengatasi nyeri, peradangan, dan demam.', 'Ibuprofen', 'healthcare.information.core.InformationComponent', 'information_impl, information_druginformation'),
    ('9619ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Obat golongan penghambat pompa proton (PPI) untuk mengurangi asam lambung, digunakan dalam pengobatan maag, GERD, dan tukak lambung.', 'Omeprazole', 'healthcare.information.core.InformationComponent', NULL),
    ('5119ff33-6dd2-4c0a-b113-a90ee32a0bac', 'Obat golongan penghambat pompa proton (PPI) untuk mengurangi asam lambung, digunakan dalam pengobatan maag, GERD, dan tukak lambung.', 'Omeprazole', 'healthcare.information.core.InformationComponent', 'information_impl, information_druginformation'),
    ('9519ff33-6dd2-4c0a-b113-a90ee32a01ca', 'Antihistamin untuk mengatasi alergi seperti rinitis alergi dan urtikaria (biduran).', 'Cetirizine', 'healthcare.information.core.InformationComponent', NULL),
    ('6119ff33-6dd2-4c0a-b113-a90ee32a0fed', 'Antihistamin untuk mengatasi alergi seperti rinitis alergi dan urtikaria (biduran).', 'Cetirizine', 'healthcare.information.core.InformationComponent', 'information_impl, information_druginformation')
ON CONFLICT (informationid) DO NOTHING;

INSERT INTO information_impl (informationid) VALUES 
    ('2119ff33-6dd2-4c0a-b113-a90ee32a0abc'),
    ('3119ff33-6dd2-4c0a-b113-a90ee32a0def'),
    ('4119ff33-6dd2-4c0a-b113-a90ee32a0acb'),
    ('5119ff33-6dd2-4c0a-b113-a90ee32a0bac'),
    ('6119ff33-6dd2-4c0a-b113-a90ee32a0fed')
ON CONFLICT (informationid) DO NOTHING;

INSERT INTO information_druginformation (informationid, record_informationid, base_component_id, recordname, dosage) VALUES 
    ('9919ff33-6dd2-4c0a-b113-a90ee32a01ca', '2119ff33-6dd2-4c0a-b113-a90ee32a0abc', '2119ff33-6dd2-4c0a-b113-a90ee32a0abc', 'healthcare.information.core.InformationImpl', 'Dewasa: 500-1000 mg setiap 4-6 jam (maksimal 4000 mg/hari), Anak-anak: Sesuai berat badan (10-15 mg/kg setiap 4-6 jam)'),
    ('9819ff33-6dd2-4c0a-b113-a90ee32a01ca', '3119ff33-6dd2-4c0a-b113-a90ee32a0def', '3119ff33-6dd2-4c0a-b113-a90ee32a0def', 'healthcare.information.core.InformationImpl', 'Dewasa: 500 mg setiap 8 jam, Anak-anak: 20-40 mg/kg/hari dibagi 3 dosis'),
    ('9719ff33-6dd2-4c0a-b113-a90ee32a01ca', '4119ff33-6dd2-4c0a-b113-a90ee32a0acb', '4119ff33-6dd2-4c0a-b113-a90ee32a0acb', 'healthcare.information.core.InformationImpl', 'Dewasa: 200-400 mg setiap 4-6 jam (maksimal 1200 mg/hari tanpa resep), Anak-anak: 5-10 mg/kg setiap 6-8 jam'),
    ('9619ff33-6dd2-4c0a-b113-a90ee32a01ca', '5119ff33-6dd2-4c0a-b113-a90ee32a0bac', '5119ff33-6dd2-4c0a-b113-a90ee32a0bac', 'healthcare.information.core.InformationImpl', 'Dewasa: 20-40 mg sekali sehari sebelum makan'),
    ('9519ff33-6dd2-4c0a-b113-a90ee32a01ca', '6119ff33-6dd2-4c0a-b113-a90ee32a0fed', '6119ff33-6dd2-4c0a-b113-a90ee32a0fed', 'healthcare.information.core.InformationImpl', 'Dewasa: 10 mg sekali sehari, Anak-anak (≥6 tahun): 5-10 mg sekali sehari')
ON CONFLICT (informationid) DO NOTHING;