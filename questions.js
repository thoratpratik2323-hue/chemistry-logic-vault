const logicData = [
    {
        chapter: "Solid State",
        questions: [
            {
                type: "Assertion-Reason",
                assertion: "Crystalline solids are anisotropic in nature.",
                reason: "Some of their physical properties like electrical resistance or refractive index show different values when measured along different directions in the same crystal.",
                verdict: "(a) Both A and R are true and R is correct explanation.",
                explanation: "Anisotropy means properties change with direction, which is typical of ordered crystalline structures."
            },
            {
                type: "Case Study",
                case: "Why does NaCl crystal appear yellow sometimes?",
                verdict: "F-centers",
                explanation: "When NaCl crystals are heated in an atmosphere of sodium vapor, anion vacancies are created which are occupied by electrons (F-centers). These electrons absorb light and impart color."
            }
        ]
    },
    {
        chapter: "Solutions",
        questions: [
            {
                type: "Assertion-Reason",
                assertion: "Molarity of a solution changes with temperature.",
                reason: "Molarity depends on the volume of the solution which changes with temperature.",
                verdict: "(a) Both A and R are true and R is the correct explanation of A.",
                explanation: "Volume expansion occur with heat, making molarity inversely proportional to temperature."
            },
            {
                type: "Case Study",
                case: "Aquatic species are more comfortable in cold water than in warm water. Explain in terms of Henry's Law.",
                verdict: "Higher Solubility",
                explanation: "According to Henry's Law, solubility of gases increases with a decrease in temperature. Hence, more dissolved oxygen is available in cold water."
            }
        ]
    },
    {
        chapter: "Electrochemistry",
        questions: [
            {
                type: "Assertion-Reason",
                assertion: "Conductivity of an electrolyte decreases with dilution.",
                reason: "The number of ions per unit volume decreases on dilution.",
                verdict: "(a) Both A and R are true and R is the correct explanation of A.",
                explanation: "Even though total ions increase in weak electrolytes, the concentration of ions per cm³ drops."
            },
            {
                type: "Case Study",
                case: "Sacrificial protection of iron is done by coating it with Zinc. Why?",
                verdict: "Anodic Protection",
                explanation: "Zinc has a lower reduction potential than Iron, so it oxidizes itself (sacrifices) to save the iron from rusting."
            }
        ]
    },
    {
        chapter: "Chemical Kinetics",
        questions: [
            {
                type: "Assertion-Reason",
                assertion: "Order of a reaction can be zero or fractional.",
                reason: "Order is an experimentally determined quantity.",
                verdict: "(b) Both A and R are true but R is NOT the correct explanation.",
                explanation: "While both are true facts, the definition of order doesn't explain why it can be zero or fractional."
            },
            {
                type: "Case Study",
                case: "Hydrolysis of ethyl acetate in presence of acid is called a pseudo-first-order reaction. Why?",
                verdict: "Concentration Factor",
                explanation: "Water is present in such large excess that its concentration remains constant during the reaction."
            }
        ]
    },
    {
        chapter: "p-Block Elements",
        questions: [
            {
                type: "Assertion-Reason",
                assertion: "Nitrogen is less reactive at room temperature.",
                reason: "Nitrogen has a high bond dissociation enthalpy due to triple bond presence.",
                verdict: "(a) Both A and R are true and R is correct explanation.",
                explanation: "Triple bond (N≡N) requires huge energy to break, making it inert at STP."
            },
            {
                type: "Case Study",
                case: "Why is H2O a liquid while H2S is a gas?",
                verdict: "Hydrogen Bonding",
                explanation: "Oxygen is highly electronegative and forms strong hydrogen bonds in water, leading to association. Sulfur is not enough electronegative."
            }
        ]
    },
    {
        chapter: "d & f Block",
        questions: [
            {
                type: "Assertion-Reason",
                assertion: "Cu+ ion is not stable in aqueous solution.",
                reason: "Cu+ undergoes disproportionation to Cu2+ and Cu due to high hydration energy of Cu2+.",
                verdict: "(a) Both A and R are true and R is correct explanation.",
                explanation: "The high negative hydration enthalpy of Cu2+ compensated for the second ionization enthalpy."
            },
            {
                type: "Case Study",
                case: "Transition elements show paramagnetic behavior. Why?",
                verdict: "Unpaired Electrons",
                explanation: "Paramagnetism arises due to the presence of unpaired electrons in (n-1)d orbitals."
            }
        ]
    },
    {
        chapter: "Coordination Compounds",
        questions: [
            {
                type: "Assertion-Reason",
                assertion: "[Ni(CO)4] is diamagnetic in nature.",
                reason: "Nickel is in zero oxidation state and CO is a strong field ligand which causes pairing.",
                verdict: "(a) Both A and R are true and R is the correct explanation.",
                explanation: "dsp2 hybridization occurs, and all electrons are paired up."
            },
            {
                type: "Case Study",
                case: "Why is [Ti(H2O)6]3+ colored while [Sc(H2O)6]3+ is colorless?",
                verdict: "d-d Transition",
                explanation: "Ti3+ has d1 configuration (unpaired electron) allowing d-d transition. Sc3+ is d0, so no transition possible."
            }
        ]
    },
    {
        chapter: "Haloalkanes & Haloarenes",
        questions: [
            {
                type: "Assertion-Reason",
                assertion: "Haloarenes are less reactive towards nucleophilic substitution than haloalkanes.",
                reason: "In haloarenes, the C-X bond acquires partial double bond character due to resonance.",
                verdict: "(a) Both A and R are true and R is correct explanation.",
                explanation: "The partial double bond makes it harder to break compared to the single bond in haloalkanes."
            },
            {
                type: "Case Study",
                case: "Why is Chloroform stored in dark colored bottles?",
                verdict: "Phosgene Formation",
                explanation: "Chloroform oxidizes in presence of light and air to form a poisonous gas called Phosgene (COCl2)."
            }
        ]
    },
    {
        chapter: "Aldehydes, Ketones & Acids",
        questions: [
            {
                type: "Assertion-Reason",
                assertion: "Aldehydes are more reactive than ketones towards nucleophilic addition.",
                reason: "Two alkyl groups in ketones reduce the electrophilicity of the carbonyl carbon.",
                verdict: "(a) Both A and R are true and R is correct explanation.",
                explanation: "Ketones have more steric hindrance and +I effect from two alkyl groups, reducing reactivity."
            },
            {
                type: "Case Study",
                case: "Carboxylic acids do not give the characteristic reactions of carbonyl group. Why?",
                verdict: "Resonance Effect",
                explanation: "The lone pairs on the Oxygen of the -OH group are involved in resonance with the carbonyl group, making the carbon less electrophilic."
            }
        ]
    },
    {
        chapter: "Amines",
        questions: [
            {
                type: "Assertion-Reason",
                assertion: "Aniline does not undergo Friedel-Crafts reaction.",
                reason: "Aniline forms a salt with AlCl3 (Lewis Acid used in the reaction).",
                verdict: "(a) Both A and R are true and R is correct explanation.",
                explanation: "The NH2 group is basic and reacts with the catalyst, deactivating the ring."
            },
            {
                type: "Case Study",
                case: "Why is the pKb of aniline more than that of methylamine?",
                verdict: "Basicity Factor",
                explanation: "In aniline, the lone pair on nitrogen is delocalized over the benzene ring, making it less available for protonation."
            }
        ]
    },
    {
        chapter: "Biomolecules",
        questions: [
            {
                type: "Assertion-Reason",
                assertion: "Vitamin C cannot be stored in our body.",
                reason: "Vitamin C is water soluble and is regularly excreted in urine.",
                verdict: "(a) Both A and R are true and R is correct explanation.",
                explanation: "Only fat-soluble vitamins (A, D, E, K) can be stored in the liver and adipose tissue."
            },
            {
                type: "Case Study",
                case: "Proteins are found to have two types of secondary structures viz. alpha-helix and beta-pleated sheet. What stabilizes these?",
                verdict: "Hydrogen Bonding",
                explanation: "Intramolecular (Alpha) and Intermolecular (Beta) hydrogen bonding between the C=O and N-H groups."
            }
        ]
    }
];
