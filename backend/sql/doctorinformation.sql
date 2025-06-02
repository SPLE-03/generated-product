-- Seeding untuk information_comp
INSERT INTO information_comp (informationid, informationdescription, informationtitle, objectname, modulesequence) VALUES
    ('d1a1fe45-0f51-4c12-845e-543a6a4eabcd', 'Dokter spesialis anak dengan pengalaman lebih dari 10 tahun menangani masalah kesehatan anak.', 'dr. Sinta Dewi, Sp.A', 'healthcare.information.core.InformationComponent', NULL),
    ('d2a1fe45-0f51-4c12-845e-543a6a4eabcd', 'Dokter spesialis anak dengan pengalaman lebih dari 10 tahun menangani masalah kesehatan anak.', 'dr. Sinta Dewi, Sp.A', 'healthcare.information.core.InformationComponent', 'information_impl, information_vaccineinfo'),
    
    ('d3a1fe45-0f51-4c12-845e-543a6a4eabcd', 'Dokter spesialis penyakit dalam yang ahli dalam penanganan diabetes dan hipertensi.', 'dr. Andi Pratama, Sp.PD', 'healthcare.information.core.InformationComponent', NULL),
    ('d4a1fe45-0f51-4c12-845e-543a6a4eabcd', 'Dokter spesialis penyakit dalam yang ahli dalam penanganan diabetes dan hipertensi.', 'dr. Andi Pratama, Sp.PD', 'healthcare.information.core.InformationComponent', 'information_impl, information_vaccineinfo'),

    ('d5a1fe45-0f51-4c12-845e-543a6a4eabcd', 'Dokter spesialis kandungan yang berpengalaman dalam menangani kehamilan risiko tinggi.', 'dr. Rina Kusuma, Sp.OG', 'healthcare.information.core.InformationComponent', NULL),
    ('d6a1fe45-0f51-4c12-845e-543a6a4eabcd', 'Dokter spesialis kandungan yang berpengalaman dalam menangani kehamilan risiko tinggi.', 'dr. Rina Kusuma, Sp.OG', 'healthcare.information.core.InformationComponent', 'information_impl, information_vaccineinfo'),

    ('d7a1fe45-0f51-4c12-845e-543a6a4eabcd', 'Dokter spesialis saraf yang menangani berbagai gangguan saraf termasuk stroke dan epilepsi.', 'dr. Budi Santosa, Sp.S', 'healthcare.information.core.InformationComponent', NULL),
    ('d8a1fe45-0f51-4c12-845e-543a6a4eabcd', 'Dokter spesialis saraf yang menangani berbagai gangguan saraf termasuk stroke dan epilepsi.', 'dr. Budi Santosa, Sp.S', 'healthcare.information.core.InformationComponent', 'information_impl, information_vaccineinfo'),

    ('d9a1fe45-0f51-4c12-845e-543a6a4eabcd', 'Dokter spesialis paru yang berpengalaman dalam menangani TBC dan asma.', 'dr. Lilis Hartati, Sp.P', 'healthcare.information.core.InformationComponent', NULL),
    ('daa1fe45-0f51-4c12-845e-543a6a4eabcd', 'Dokter spesialis paru yang berpengalaman dalam menangani TBC dan asma.', 'dr. Lilis Hartati, Sp.P', 'healthcare.information.core.InformationComponent', 'information_impl, information_vaccineinfo')
ON CONFLICT (informationid) DO NOTHING;

-- Seeding untuk information_impl
INSERT INTO information_impl (informationid) VALUES 
    ('d2a1fe45-0f51-4c12-845e-543a6a4eabcd'),
    ('d4a1fe45-0f51-4c12-845e-543a6a4eabcd'),
    ('d6a1fe45-0f51-4c12-845e-543a6a4eabcd'),
    ('d8a1fe45-0f51-4c12-845e-543a6a4eabcd'),
    ('daa1fe45-0f51-4c12-845e-543a6a4eabcd')
ON CONFLICT (informationid) DO NOTHING;

-- Seeding untuk information_vaccineinfo yang diubah menjadi data dokter
INSERT INTO information_doctorinformation (informationid, record_informationid, base_component_id, recordname, specialist) VALUES 
    ('d1a1fe45-0f51-4c12-845e-543a6a4eabcd', 'd2a1fe45-0f51-4c12-845e-543a6a4eabcd', 'd2a1fe45-0f51-4c12-845e-543a6a4eabcd', 'healthcare.information.core.InformationImpl', 'Spesialis Anak'),
    ('d3a1fe45-0f51-4c12-845e-543a6a4eabcd', 'd4a1fe45-0f51-4c12-845e-543a6a4eabcd', 'd4a1fe45-0f51-4c12-845e-543a6a4eabcd', 'healthcare.information.core.InformationImpl', 'Spesialis Penyakit Dalam'),
    ('d5a1fe45-0f51-4c12-845e-543a6a4eabcd', 'd6a1fe45-0f51-4c12-845e-543a6a4eabcd', 'd6a1fe45-0f51-4c12-845e-543a6a4eabcd', 'healthcare.information.core.InformationImpl', 'Spesialis Obstetri dan Ginekologi'),
    ('d7a1fe45-0f51-4c12-845e-543a6a4eabcd', 'd8a1fe45-0f51-4c12-845e-543a6a4eabcd', 'd8a1fe45-0f51-4c12-845e-543a6a4eabcd', 'healthcare.information.core.InformationImpl', 'Spesialis Saraf'),
    ('d9a1fe45-0f51-4c12-845e-543a6a4eabcd', 'daa1fe45-0f51-4c12-845e-543a6a4eabcd', 'daa1fe45-0f51-4c12-845e-543a6a4eabcd', 'healthcare.information.core.InformationImpl', 'Spesialis Paru')
ON CONFLICT (informationid) DO NOTHING;
