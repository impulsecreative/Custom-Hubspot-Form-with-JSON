/* CUSTOM SELECT */
document.querySelector('.custom-select-wrapper.states').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
});
document.querySelector('.custom-select-wrapper.types').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
});
document.querySelector('.custom-select-wrapper.schools').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
});
window.addEventListener('click', function(e) {
    const states_select = document.querySelector('.custom-select.states');
    const types_select = document.querySelector('.custom-select.types');
    const school_select = document.querySelector('.custom-select.schools');
    if (!states_select.contains(e.target)) {
        states_select.classList.remove('open');
    }
    if (!types_select.contains(e.target)) {
        types_select.classList.remove('open');
    }
    if (!school_select.contains(e.target)) {
        school_select.classList.remove('open');
    }
});
var selected_state;
var selected_type;
window.addEventListener('DOMContentLoaded', function(e) { 
    for (const option of document.querySelectorAll(".custom-option")) {
        option.addEventListener('click', function() {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
            if(this.parentNode.classList.contains('states')) {
                selected_state = this.textContent;
                document.getElementById('typesSelect').classList.remove('disabled');
                document.getElementById('typesSelect').style.opacity = "1";
            }
            if(this.parentNode.classList.contains('types')) {
                selected_type = this.textContent;
                document.getElementById('schoolsSelect').classList.remove('disabled');
                document.getElementById('schoolsSelect').style.opacity = "1";
                
                var schools = schools_array.filter(function(item){
                    return item.state == selected_state && item.program == selected_type;  
                })
                populateSchoolsSelect(schools);
            }
        })
    }
});

/* FUNCTIONS */
function populateStateSelect() {
    var states = [];
    var sel = document.querySelector('.custom-options.states');
    var count = 0;
    schools_array.forEach(elm => {
        if(!states.includes(elm.state)){
            states.push(elm.state);
        }
    });
    states.sort().forEach(state => {
        count++;
        var node = document.createElement("span");
        var textnode = document.createTextNode(state);
        node.appendChild(textnode);
        node.setAttribute('data-value', state);
        node.classList.add("custom-option");
        if(count==1) node.classList.add("selected");
        sel.appendChild(node);
    });
}

function populateTypesSelect() {
    var programs = [];
    var sel = document.querySelector('.custom-options.types');
    var count = 0;
    schools_array.forEach(elm => {
        if(!programs.includes(elm.program)){
            programs.push(elm.program);
        }
    });
    programs.sort().forEach(program => {
        count++;
        var node = document.createElement("span");
        var textnode = document.createTextNode(program);
        node.appendChild(textnode);
        node.setAttribute('data-value', program);
        node.classList.add("custom-option");
        if(count==1) node.classList.add("selected");
        sel.appendChild(node);
    });
}

function populateSchoolsSelect(school_array) {
    var sel = document.querySelector('.custom-options.schools');
    sel.innerHTML = '';
    var count = 0;
    var schools = [];
    school_array.forEach(elm => {
        if(!schools.includes(elm.school)){
            schools.push(elm.school);
        }
    });
    schools.sort().forEach(school => {
        count++;
        var node = document.createElement("span");
        var textnode = document.createTextNode(school);
        node.appendChild(textnode);
        node.setAttribute('data-value', school);
        node.classList.add("custom-option");
        if(count==1) node.classList.add("selected");
        sel.appendChild(node);
    });
    for (const option of document.querySelectorAll("#schoolsSelect .custom-option")) {
        option.addEventListener('click', function() {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        });
    }
}

function init() {
    populateStateSelect();
    populateTypesSelect();
}

/* SCHOOLS ARRAY */
var schools_array = [
    {
		"state": "New York",
		"zip": "14214",
		"school": "UNIVERSITY OF BUFFALO SCHOOL OF DENTAL MEDICINE",
		"program": "AAPD "
	},
	{
		"state": "Connecticut",
		"zip": "06030",
		"school": "UNIVERSITY OF CONNECTICUT SCHOOL OF DENTAL MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "District of Columbia",
		"zip": "20059",
		"school": "HOWARD UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "Massachusetts",
		"zip": "02135",
		"school": "NYU LANGONE DENTAL MEDICINE-CHARLES RIVER COMMUNITY HEALTH-JOSEPH M. SMITH BUILDING",
		"program": "AEGD"
	},
	{
		"state": "Massachusetts",
		"zip": "02124",
		"school": "NYU LANGONE DENTAL MEDICINE-CODMAN SQUARE HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "Massachusetts",
		"zip": "01601",
		"school": "NYU LANGONE DENTAL MEDICINE-EDWARD M KENNEDY FHC-WORCESTER- MA",
		"program": "AEGD"
	},
	{
		"state": "Massachusetts",
		"zip": "02215",
		"school": "NYU LANGONE DENTAL MEDICINE-FENWAY COMMUNITY HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "Massachusetts",
		"zip": "01610",
		"school": "NYU LANGONE DENTAL MEDICINE-FHC OF WORCESTER-MA",
		"program": "AEGD"
	},
	{
		"state": "Massachusetts",
		"zip": "02645",
		"school": "NYU LANGONE DENTAL MEDICINE-HARBOR HEALTH SERVICES INC.",
		"program": "AEGD"
	},
	{
		"state": "Massachusetts",
		"zip": "01013",
		"school": "NYU LANGONE DENTAL MEDICINE-HOLYOKE HEALTH CENTER- CHICOPEE",
		"program": "AEGD"
	},
	{
		"state": "Massachusetts",
		"zip": "02120",
		"school": "NYU LANGONE DENTAL MEDICINE-WHITTIER STREET HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "Massachusetts",
		"zip": "02111",
		"school": "TUFTS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "Maryland",
		"zip": "20889",
		"school": "NAVY MEDICINE PROFESSIONAL DEVELOPMENT CENTER",
		"program": "AEGD"
	},
	{
		"state": "Maryland",
		"zip": "21201",
		"school": "NYU LANGONE DENTAL MEDICINE-BALTIMORE-MD",
		"program": "AEGD"
	},
	{
		"state": "Maryland",
		"zip": "21632",
		"school": "NYU LANGONE DENTAL MEDICINE-CHOPTANK COMMUNITY HEALTH SYSTEMS",
		"program": "AEGD"
	},
	{
		"state": "Maryland",
		"zip": "21853",
		"school": "NYU LANGONE DENTAL MEDICINE-PRINCESS ANNE- MD",
		"program": "AEGD"
	},
	{
		"state": "Maryland",
		"zip": "21613",
		"school": "NYU LANGONE DENTAL MEDICINE-Chase Brexton",
		"program": "AEGD"
	},
	{
		"state": "Maine",
		"zip": "04401",
		"school": "PENOBSCOT COMMUNITY HEALTH CENTER-DENTAL SERVICE",
		"program": "AEGD"
	},
	{
		"state": "Maine",
		"zip": "04330",
		"school": "VETERANS AFFAIRS MEDICAL CENTER TOGUS DENTAL SERVICE",
		"program": "AEGD"
	},
	{
		"state": "Pennsylvania",
		"zip": "19140",
		"school": "TEMPLE UNIVERSITY THE MAURICE H. KORNBERG SCHOOL OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "Rhode Island",
		"zip": "02907",
		"school": "NYU LANGONE DENTAL MEDICINE-PROVIDENCE-RI SITE",
		"program": "AEGD"
	},
	{
		"state": "Rhode Island",
		"zip": "02908",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/PROVIDENCE DENTAL SERVICE",
		"program": "AEGD"
	},
	{
		"state": "Virginia",
		"zip": "23665",
		"school": "633 MDSS/SGSLM/LANGLEY AFB",
		"program": "AEGD"
	},
	{
		"state": "Virginia",
		"zip": "23511",
		"school": "NAVAL MEDICAL CENTER PORTSMOUTH",
		"program": "AEGD"
	},
	{
		"state": "Virginia",
		"zip": "23298",
		"school": "VIRGINIA COMMONWEALTH UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "West Virginia",
		"zip": "25405",
		"school": "VETERANS AFFAIRS MEDICAL CENTER-MARTINSBURG",
		"program": "AEGD"
	},
	{
		"state": "Hawaii",
		"zip": "96749",
		"school": "NYU LANGONE DENTAL MEDICINE - BAY CLINIC- INC.",
		"program": "AEGD"
	},
	{
		"state": "Hawaii",
		"zip": "96793",
		"school": "NYU LANGONE DENTAL MEDICINE - MAUI WAILUKU- HI",
		"program": "AEGD"
	},
	{
		"state": "Hawaii",
		"zip": "96795",
		"school": "NYU LANGONE DENTAL MEDICINE - WAIMANALO HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "Hawaii",
		"zip": "96817",
		"school": "US ARMY DENTAL ACTIVITY/TRIPLER",
		"program": "AEGD"
	},
	{
		"state": "Hawaii",
		"zip": "96819",
		"school": "NYU LANGONE DENTAL MEDICINE - KOKUA KALIHI VALLEY CHC",
		"program": "AEGD"
	},
	{
		"state": "Hawaii",
		"zip": "96826",
		"school": "NYU LANGONE DENTAL MEDICINE - WAIKIKI HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "Alaska",
		"zip": "99801",
		"school": "NYU LANGONE DENTAL MEDICINE - SOUTHEAST ALASKA",
		"program": "AEGD"
	},
	{
		"state": "New Jersey",
		"zip": "7801",
		"school": "NYU LANGONE DENTAL MEDICINE - DOVER- NJ",
		"program": "AEGD"
	},
	{
		"state": "New Jersey",
		"zip": "7304",
		"school": "NYU LANGONE DENTAL MEDICINE - JERSEY CITY- NJ",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "COLUMBIA UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "10011",
		"school": "NYU LANGONE DENTAL MEDICINE - CALLEN LORDE COMMUNITY HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "12203",
		"school": "NYU LANGONE DENTAL MEDICINE - EMBLEMHEALTH",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "11220",
		"school": "NYU LANGONE DENTAL MEDICINE - METROPOLITAN- 7TH AVENUE FHC OF NYU LANGONE",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "11203",
		"school": "NYU LANGONE DENTAL MEDICINE - METROPOLITAN- FLATBUSH AVENUE FHC OF NYU LANGONE",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "10010",
		"school": "NYU LANGONE DENTAL MEDICINE - NYU COLLEGE OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "12307",
		"school": "NYU LANGONE DENTAL MEDICINE - SCHENECTADY FAMILY HEALTH SERVICES (HOMETOWN HEALTH)",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "10030",
		"school": "NYU LANGONE DENTAL MEDICINE - UPPER ROOM AIDS MINISTRY- INC.- HARLEM UNITED",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "12207",
		"school": "NYU LANGONE DENTAL MEDICINE - WHITNEY M. YOUNG- JR. HEALTH CENTER- INC",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "10548",
		"school": "VA HUDSON VALLEY HEALTH CARE SYSTEM",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "12208",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/STRATTON",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "32542",
		"school": "96TH MEDICAL GROUP/SGD/EGLIN AFB",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "33127",
		"school": "DADE CNTY DENTAL RES CLINIC/ FLORIDA INST FOR ADV DENTAL ED",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "33143",
		"school": "LARKIN COMMUNITY HOSPITAL",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "33328",
		"school": "NOVA SOUTHEASTERN UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "33901",
		"school": "NYU LANGONE FAMILY HEALTH CENTERS OF SW FL, INC.",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "34142",
		"school": "NYU LANGONE HEALTHCARE NETWORK OF SOUTHWEST FLORIDA(HCN)",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "33142",
		"school": "NYU LANGONE JESSIE TRICE COMMUNITY HEALTH CENTER, INC.",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "34211",
		"school": "NYU LANGONE LAKE ERIE COLLEGE OF OSTEOPATHIC MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "33013",
		"school": "UNIVERSITY OF FLORIDA COLLEGE OF DENTISTRY/HIALEAH",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "33772",
		"school": "UNIVERSITY OF FLORIDA COLLEGE OF DENTISTRY/SEMINOLE",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "33744",
		"school": "VETERAN AFFAIRS MEDICAL CENTER/BAY PINES",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "33125",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/MIAMI",
		"program": "AEGD"
	},
	{
		"state": "Florida",
		"zip": "32827",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/ORLANDO DENTAL SERVICE",
		"program": "AEGD"
	},
	{
		"state": "Ohio",
		"zip": "44106",
		"school": "CASE RESERVE UNIV. SCHOOL OF DENTAL MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "Ohio",
		"zip": "44128",
		"school": "CLEVELAND DENTAL INSTITUTE",
		"program": "AEGD"
	},
	{
		"state": "West Virginia",
		"zip": "25705",
		"school": "NYU LANGONE DENTAL MEDICINE - VALLEY HEALTH",
		"program": "AEGD"
	},
	{
		"state": "Alabama",
		"zip": "35020",
		"school": "NYU LANGONE DENTAL MEDICINE - - FOUNDRY DENTAL CENTER- BESSEMER- AL",
		"program": "AEGD"
	},
	{
		"state": "Alabama",
		"zip": "35294",
		"school": "UNIVERSITY OF ALABAMA SCHOOL OF DENTISTRY AT UAB",
		"program": "AEGD"
	},
	{
		"state": "Alabama",
		"zip": "35294",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/BIRMINGHAM",
		"program": "AEGD"
	},
	{
		"state": "Georgia",
		"zip": "30318",
		"school": "NYU LANGONE DENTAL MEDICINE - BEN MASSELL DENTAL CLINIC",
		"program": "AEGD"
	},
	{
		"state": "Georgia",
		"zip": "30308",
		"school": "NYU LANGONE GRADY HEALTH SYSTEM",
		"program": "AEGD"
	},
	{
		"state": "Georgia",
		"zip": "30912",
		"school": "THE DENTAL COLLEGE OF GEORGIA AT AUGUSTA UNIVERSITY",
		"program": "AEGD"
	},
	{
		"state": "Georgia",
		"zip": "31907",
		"school": "US ARMY DENTAL ACTIVITY/FT BENNING",
		"program": "AEGD"
	},
	{
		"state": "Georgia",
		"zip": "30904",
		"school": "VETERANS AFFAIRS MEDICAL CENTER - AUGUSTA",
		"program": "AEGD"
	},
	{
		"state": "Illinois",
		"zip": "62225",
		"school": "375TH MEDICAL GROUP/SGDR/SCOTT AFB",
		"program": "AEGD"
	},
	{
		"state": "Illinois",
		"zip": "62002",
		"school": "SOUTHERN ILLINOIS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "Missouri",
		"zip": "65806",
		"school": "NYU LANGONE DENTAL MEDICINE - SPRINGFIELD- MO",
		"program": "AEGD"
	},
	{
		"state": "Missouri",
		"zip": "64108",
		"school": "UNIVERSITY OF MISSOURI-KANSAS CITY SCHOOL OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "Mississippi",
		"zip": "39530",
		"school": "81ST MEDICAL GROUP/DS/SGDDT/KEESLER AFB",
		"program": "AEGD"
	},
	{
		"state": "Mississippi",
		"zip": "39216",
		"school": "UNIVERSITY OF MISSISSIPPI SCHOOL OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "North Carolina",
		"zip": "28547",
		"school": "2ND DENTAL BATTALION NAVAL DENTAL CLINIC/LE JEUNE",
		"program": "AEGD"
	},
	{
		"state": "North Carolina",
		"zip": "27832",
		"school": "EAST CAROLINA UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "North Carolina",
		"zip": "28580",
		"school": "NYU LANGONE DENTAL MEDICINE - GREENE COUNTY HEALTH CARE- INC",
		"program": "AEGD"
	},
	{
		"state": "North Carolina",
		"zip": "27599",
		"school": "UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL SCHOOL OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "North Carolina",
		"zip": "28310",
		"school": "US ARMY DENTAL ACTIVITY/UNIVERSITY OF THE HEALTH SCIENCES- FORT BRAGG",
		"program": "AEGD"
	},
	{
		"state": "North Carolina",
		"zip": "28301",
		"school": "VA FAYETTEVILLE DENTAL SERVICE",
		"program": "AEGD"
	},
	{
		"state": "South Carolina",
		"zip": "29425",
		"school": "MEDICAL UNIVERSITY OF SOUTH CAROLINA COLLEGE OF DENTAL MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "South Carolina",
		"zip": "29207",
		"school": "US ARMY DENTAL ACTIVITY/FT JACKSON",
		"program": "AEGD"
	},
	{
		"state": "Tennessee",
		"zip": "38112",
		"school": "NYU LANGONE DENTAL MEDICINE - CHRIST COMMUNITY HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "Tennessee",
		"zip": "37203",
		"school": "NYU LANGONE DENTAL MEDICINELUTHERAN - NASHVILLE- TN",
		"program": "AEGD"
	},
	{
		"state": "Kentucky",
		"zip": "40216",
		"school": "NYU LANGONE DENTAL MEDICINE - LEE SPECIALTY CLINIC",
		"program": "AEGD"
	},
	{
		"state": "Kentucky",
		"zip": "42223",
		"school": "US ARMY DENTAL ACTIVITY/FT. CAMPBELL",
		"program": "AEGD"
	},
	{
		"state": "Michigan",
		"zip": "49201",
		"school": "NYU LANGONE DENTAL MEDICINE - - JACKSON- MI",
		"program": "AEGD"
	},
	{
		"state": "Michigan",
		"zip": "48505",
		"school": "NYU LANGONE DENTAL MEDICINE - FLINT- MI",
		"program": "AEGD"
	},
	{
		"state": "Michigan",
		"zip": "48208",
		"school": "UNIVERSITY OF DETROIT MERCY SCHOOL OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "Michigan",
		"zip": "48109",
		"school": "UNIVERSITY OF MICHIGAN SCHOOL OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "14214",
		"school": "UNIVERSITY OF BUFFALO SCHOOL OF DENTAL MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "14620",
		"school": "UNIVERSITY OF ROCHESTER EASTMAN INSTITUTE FOR ORAL HEALTH",
		"program": "AEGD"
	},
	{
		"state": "New York",
		"zip": "14215",
		"school": "VA WESTERN NEW YORK HEALTHCARE SYSTEM - DENTAL DEPARTMENT",
		"program": "AEGD"
	},
	{
		"state": "Ohio",
		"zip": "45433",
		"school": "88TH DENTAL SQUADRON/SGD/WRIGHT-PATTERSON AFB",
		"program": "AEGD"
	},
	{
		"state": "Ohio",
		"zip": "43604",
		"school": "NYU LANGONE DENTAL MEDICINE - DENTAL CENTER OF NORTHWEST OHIO (TOLEDO)",
		"program": "AEGD"
	},
	{
		"state": "Ohio",
		"zip": "45840",
		"school": "NYU LANGONE DENTAL MEDICINE - DENTAL CENTER OF NORTHWEST OHIO (FINDLAY)",
		"program": "AEGD"
	},
	{
		"state": "Ohio",
		"zip": "45331",
		"school": "NYU LANGONE DENTAL MEDICINE - FAMILY HEALTH OF DARKE COUNTY",
		"program": "AEGD"
	},
	{
		"state": "Ohio",
		"zip": "45805",
		"school": "NYU LANGONE DENTAL MEDICINE - LIMA COMMUNITY DENTAL - LIMA- OH",
		"program": "AEGD"
	},
	{
		"state": "Ohio",
		"zip": "45044",
		"school": "NYU LANGONE DENTAL MEDICINE - PRIMARY HEALTH SOLUTIONS- INC.",
		"program": "AEGD"
	},
	{
		"state": "Ohio",
		"zip": "45750",
		"school": "NYU LANGONE DENTAL MEDICINE - FAMILY TREE DENTAL",
		"program": "AEGD"
	},
	{
		"state": "Ohio",
		"zip": "45219",
		"school": "UNIVERSITY OF CINCINNATI MEDICAL CENTER - DENTAL CENTER",
		"program": "AEGD"
	},
	{
		"state": "Ohio",
		"zip": "45428",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/DAYTON",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "95112",
		"school": "NYU LANGONE DENTAL MEDICINE - SAN JOSE- GARDNER FAMILY HEALTH NETWORK",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "94565",
		"school": "NYU LANGONE DENTAL MEDICINE - LA CLINICA DE LA RAZA",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "94601",
		"school": "NYU LANGONE DENTAL MEDICINE - NATIVE AMERICAN HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "95501",
		"school": "NYU LANGONE DENTAL MEDICINE - OPEN DOOR HEALTH",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "94303",
		"school": "NYU LANGONE DENTAL MEDICINE - RAVENSWOOD FAMILY HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "96001",
		"school": "NYU LANGONE DENTAL MEDICINE - SHASTA COMMUNITY HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "95667",
		"school": "NYU LANGONE DENTAL MEDICINE - SHINGLE SPRINGS- CA",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "94143",
		"school": "NYU LANGONE DENTAL MEDICINE - SAN FRANCISCO- CA-UCSF CAMPUS",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "94103",
		"school": "UNIVERSITY OF THE PACIFIC ARTHUR A. DUGONI SCHOOL OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "93535",
		"school": "60TH MEDICAL GROUP/TRAVIS AFB",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "94602",
		"school": "ALAMEDA HEALTH SYSTEM/MEDICAL CENTER",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "94019",
		"school": "NYU LANGONE DENTAL MEDICINE - APPLE TREE DENTAL-SONRISAS CENTER",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "93638",
		"school": "NYU LANGONE DENTAL MEDICINE - CAMERENA HEALTH",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "95616",
		"school": "NYU LANGONE DENTAL MEDICINE - COMMUNICARE HEALTH CENTERS",
		"program": "AEGD"
	},
	{
		"state": "Idaho",
		"zip": "83209",
		"school": "IDAHO STATE UNIVERSITY KASISKA DIVISION OF HEALTH SCIENCES",
		"program": "AEGD"
	},
	{
		"state": "Illinois",
		"zip": "60088",
		"school": "CAPTAIN JAMES A. LOVELL FEDERAL HEALTH CARE CENTER - DENTAL",
		"program": "AEGD"
	},
	{
		"state": "Minnesota",
		"zip": "55112",
		"school": "NYU LANGONE DENTAL MEDICINE - MINNEAPOLIS- MN (APPLE TREE DENTAL)",
		"program": "AEGD"
	},
	{
		"state": "Montana",
		"zip": "59101",
		"school": "NYU LANGONE DENTAL MEDICINE - RIVERSTONE HEALTH",
		"program": "AEGD"
	},
	{
		"state": "Nebraska",
		"zip": "68113",
		"school": "55TH DENTAL SQUADRON/SGD/OFFUTT AFB",
		"program": "AEGD"
	},
	{
		"state": "Utah",
		"zip": "84095",
		"school": "NYU LANGONE DENTAL MEDICINE - ROSEMAN UNIVERSITY OF HEALTH SCIENCES COLLEGE OF DENTAL MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "Washington",
		"zip": "99344",
		"school": "NYU LANGONE DENTAL MEDICINE - COLUMBIA BASIN HEALTH ASSOCIATION",
		"program": "AEGD"
	},
	{
		"state": "Washington",
		"zip": "98402",
		"school": "NYU LANGONE DENTAL MEDICINE - TACOMA- WA",
		"program": "AEGD"
	},
	{
		"state": "Washington",
		"zip": "98168",
		"school": "NYU LANGONE DENTAL MEDICINE - HEALTHPOINT",
		"program": "AEGD"
	},
	{
		"state": "Washington",
		"zip": "98104",
		"school": "NYU LANGONE DENTAL MEDICINE - INTERNATIONAL COMMUNITY HEALTH SERVICES",
		"program": "AEGD"
	},
	{
		"state": "Washington",
		"zip": "98144",
		"school": "NYU LANGONE DENTAL MEDICINE - NEIGHBORCARE HEALTH",
		"program": "AEGD"
	},
	{
		"state": "Washington",
		"zip": "99201",
		"school": "NYU LANGONE DENTAL MEDICINE - SPOKANE- WA",
		"program": "AEGD"
	},
	{
		"state": "Washington",
		"zip": "98431",
		"school": "US ARMY DENTAL ACTIVITY-JOINT BASE LEWIS-MCCHORD",
		"program": "AEGD"
	},
	{
		"state": "Washington",
		"zip": "98948",
		"school": "YAKIMA VALLEY FARM WORKERS CLINIC/NORTHWEST DENTAL RESIDENCY",
		"program": "AEGD"
	},
	{
		"state": "Wisconsin",
		"zip": "53233",
		"school": "MARQUETTE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "Wisconsin",
		"zip": "53295",
		"school": "ZABLOCKI VA GREAT LAKES/MILWAUKEE",
		"program": "AEGD"
	},
	{
		"state": "Arkansas",
		"zip": "72949",
		"school": "VETERANS HEALTHCARE SYSTEM OF THE OZARKS - DENTAL SERVICE",
		"program": "AEGD"
	},
	{
		"state": "Arizona",
		"zip": "85206",
		"school": "NYU LANGONE DENTAL MEDICINE - ARIZONA SCHOOL OF DENTISTRY AND ORAL HEALTH",
		"program": "AEGD"
	},
	{
		"state": "Arizona",
		"zip": "85007",
		"school": "NYU LANGONE DENTAL MEDICINE - CASS (CENTRAL ARIZONA SHELTER SERVICES)",
		"program": "AEGD"
	},
	{
		"state": "Arizona",
		"zip": "85745",
		"school": "NYU LANGONE DENTAL MEDICINE - EL RIO COMMUNITY HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "Arizona",
		"zip": "85008",
		"school": "NYU LANGONE DENTAL MEDICINE - MARICOPA INTEGRATED HEALTH SYSTEM (MIHS)",
		"program": "AEGD"
	},
	{
		"state": "Arizona",
		"zip": "85757",
		"school": "NYU LANGONE DENTAL MEDICINE - SOUTHERN ARIZONA- PASCUA YAQUI TRIBAL HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "Arizona",
		"zip": "85003",
		"school": "NYU LANGONE DENTAL MEDICINE - ST. VINCENT DE PAUL VIRGINIA G. PIPER DENTAL CLINIC",
		"program": "AEGD"
	},
	{
		"state": "Arizona",
		"zip": "86047",
		"school": "NYU LANGONE DENTAL MEDICINE - WINSLOW- AZ",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "92055",
		"school": "1ST DENTAL BATTALION/CAMP PENDLETON-DENTAL CENTER",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "92135",
		"school": "NAVAL DENTAL CENTER/HOSPITAL - SAN DIEGO",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "90017",
		"school": "NYU LANGONE DENTAL MEDICINE - APLA DENTAL SERVICES- INC.",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "92105",
		"school": "NYU LANGONE DENTAL MEDICINE - LA MAESTRA FAMILY CLINIC- INC.",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "93103",
		"school": "NYU LANGONE DENTAL MEDICINE - SANTA BARBARA- CA",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "93291",
		"school": "NYU LANGONE DENTAL MEDICINE - VISALIA- CA",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "92270",
		"school": "NYU LANGONE DENTAL MEDICINE - WESTERN UNIVERSITY OF HEALTH SCIENCES / WE CARE DENTAL",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "90291",
		"school": "UCLA DENTAL CENTER AT VENICE",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "90095",
		"school": "UNIVERSITY OF CALIFORNIA AT LOS ANGELES SCHOOL OF DENTISTRY (Westwood)",
		"program": "AEGD"
	},
	{
		"state": "California",
		"zip": "90822",
		"school": "VETERANS AFFAIRS LONG BEACH HEALTHCARE SYSTEM",
		"program": "AEGD"
	},
	{
		"state": "Colorado",
		"zip": "80840",
		"school": "10TH MEDICAL GROUP/SGFL/USAF ACADEMY",
		"program": "AEGD"
	},
	{
		"state": "Colorado",
		"zip": "81501",
		"school": "NYU LANGONE DENTAL MEDICINE - MARILLAC CLINIC",
		"program": "AEGD"
	},
	{
		"state": "Colorado",
		"zip": "81004",
		"school": "NYU LANGONE DENTAL MEDICINE - PUEBLO- CO",
		"program": "AEGD"
	},
	{
		"state": "Colorado",
		"zip": "80601",
		"school": "NYU LANGONE DENTAL MEDICINE - Salud Family Health Centers",
		"program": "AEGD"
	},
	{
		"state": "Colorado",
		"zip": "80913",
		"school": "US ARMY DENTAL ACTIVITY/FT CARSON",
		"program": "AEGD"
	},
	{
		"state": "Kansas",
		"zip": "67260",
		"school": "WICHITA STATE UNIVERSITY",
		"program": "AEGD"
	},
	{
		"state": "New Mexico",
		"zip": "87508",
		"school": "NYU LANGONE DENTAL MEDICINE - SANTA FE- NM",
		"program": "AEGD"
	},
	{
		"state": "New Mexico",
		"zip": "87131",
		"school": "UNIVERSITY OF NEW MEXICO HEALTH SCIENCES CENTER",
		"program": "AEGD"
	},
	{
		"state": "Nevada",
		"zip": "89191",
		"school": "99TH MEDICAL GROUP- NELLIS AFB",
		"program": "AEGD"
	},
	{
		"state": "Oklahoma",
		"zip": "73117",
		"school": "UNIVERSITY OF OKLAHOMA COLLEGE OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "Oklahoma",
		"zip": "73503",
		"school": "US ARMY DENTAL ACTIVITY/FORT SILL",
		"program": "AEGD"
	},
	{
		"state": "Texas",
		"zip": "76707",
		"school": "NYU LANGONE DENTAL MEDICINE - HEART OF TEXAS COMMUNITY HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "Texas",
		"zip": "79901",
		"school": "NYU Langone Health Texas - Centro de Salud Familiar La Fe",
		"program": "AEGD"
	},
	{
		"state": "Texas",
		"zip": "75246",
		"school": "TEXAS A&M UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "AEGD"
	},
	{
		"state": "Texas",
		"zip": "76544",
		"school": "US ARMY DENTAL ACTIVITY/FORT HOOD",
		"program": "AEGD"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "UT HEALTH SCIENCE CENTER AT HOUSTON",
		"program": "AEGD"
	},
	{
		"state": "Texas",
		"zip": "78229",
		"school": "UT HEALTH SCIENCE CENTER AT SAN ANTONIO",
		"program": "AEGD"
	},
	{
		"state": "Texas",
		"zip": "78028",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/SAN ANTONIO",
		"program": "AEGD"
	},
	{
		"state": "Texas",
		"zip": "76504",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/TEMPLE-DENTAL SERVICE",
		"program": "AEGD"
	},
	{
		"state": "Texas",
		"zip": "78236",
		"school": "WILFORD HALL AMBULATORY SURGICAL CENTER-59TH MEDICAL WING (WHASC)",
		"program": "AEGD"
	},
	{
		"state": "South Carolina",
		"zip": "29401",
		"school": "VETERANS AFFAIRS/CHARLESTON DENTAL SERVICE",
		"program": "AEGD"
	},
	{
		"state": "Massachusetts",
		"zip": "02118",
		"school": "BOSTON UNIVERSITY HENRY M. GOLDMAN SCHOOL OF DENTAL MEDICINE",
		"program": "AEGD"
	},
	{
		"state": "Massachusetts",
		"zip": "01901",
		"school": "NYU LANGONE DENTAL MEDICINE - LYNN COMMUNITY HEALTH CENTER",
		"program": "AEGD"
	},
	{
		"state": "Connecticut",
		"zip": "06030",
		"school": "UNIVERSITY OF CONNECTICUT",
		"program": "Dental School"
	},
	{
		"state": "District of Columbia",
		"zip": "20060",
		"school": "HOWARD UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "Massachusetts",
		"zip": "02118",
		"school": "BOSTON UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "Massachusetts",
		"zip": "02115",
		"school": "HARVARD UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "Massachusetts",
		"zip": "02111",
		"school": "TUFTS UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "Maine",
		"zip": "04005",
		"school": "UNIVERSITY OF NEW ENGLAND",
		"program": "Dental School"
	},
	{
		"state": "Pennsylvania",
		"zip": "19140",
		"school": "TEMPLE UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "Pennsylvania",
		"zip": "19104",
		"school": "UNIVERSITY OF PENNSYLVANIA",
		"program": "Dental School"
	},
	{
		"state": "Virginia",
		"zip": "23298",
		"school": "VIRGINIA COMMONWEALTH UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "New Jersey",
		"zip": "7103",
		"school": "RUTGERS SCHOOL OF DENTAL MEDICINE",
		"program": "Dental School"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "COLUMBIA UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "Dental School"
	},
	{
		"state": "New York",
		"zip": "10010",
		"school": "NEW YORK UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "New York",
		"zip": "11794",
		"school": "STONY BROOK UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "New York",
		"zip": "10532",
		"school": "TOURO COLLEGE OF DENTAL MEDICINE",
		"program": "Dental School"
	},
	{
		"state": "Florida",
		"zip": "34211",
		"school": "LECOM SCHOOL OF DENTAL MEDICINE",
		"program": "Dental School"
	},
	{
		"state": "Florida",
		"zip": "33328",
		"school": "NOVA SOUTHEASTERN UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "Florida",
		"zip": "32610",
		"school": "UNIVERSITY OF FLORIDA COLLEGE OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Ohio",
		"zip": "44106",
		"school": "CASE WESTERN RESERVE UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "Pennsylvania",
		"zip": "15261",
		"school": "UNIVERSITY OF PITTSBURGH SCHOOL OF DENTAL MEDICINE",
		"program": "Dental School"
	},
	{
		"state": "West Virginia",
		"zip": "26505",
		"school": "WEST VIRGINIA UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "Alabama",
		"zip": "35294",
		"school": "UNIVERSITY OF ALABAMA",
		"program": "Dental School"
	},
	{
		"state": "Georgia",
		"zip": "30912",
		"school": "THE DENTAL COLLEGE OF GEORGIA AT AUGUSTA UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "Illinois",
		"zip": "62002",
		"school": "SOUTHERN ILLINOIS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Dental School"
	},
	{
		"state": "Louisiana",
		"zip": "70119",
		"school": "LOUISIANA STATE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Missouri",
		"zip": "63501",
		"school": "AT STILL - ST LOUIS",
		"program": "Dental School"
	},
	{
		"state": "Missouri",
		"zip": "64108",
		"school": "UNIVERSITY OF MISSOURI-KANSAS CITY SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Mississippi",
		"zip": "39216",
		"school": "UNIVERSITY OF MISSISSIPPI SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "North Carolina",
		"zip": "27832",
		"school": "EAST CAROLINA UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "North Carolina",
		"zip": "27599",
		"school": "UNIVERSITY OF NORTH CAROLINA",
		"program": "Dental School"
	},
	{
		"state": "South Carolina",
		"zip": "29425",
		"school": "MEDICAL UNIVERSITY OF SOUTH CAROLINA",
		"program": "Dental School"
	},
	{
		"state": "Tennessee",
		"zip": "37208",
		"school": "MEHARRY MEDICAL COLLEGE",
		"program": "Dental School"
	},
	{
		"state": "Tennessee",
		"zip": "38163",
		"school": "UNIV. OF TENNESSEE HLTH SCI CENTER",
		"program": "Dental School"
	},
	{
		"state": "Indiana",
		"zip": "46202",
		"school": "INDIANA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Kentucky",
		"zip": "40536",
		"school": "UNIVERSITY OF KENTUCKY",
		"program": "Dental School"
	},
	{
		"state": "Kentucky",
		"zip": "40202",
		"school": "UNIVERSITY OF LOUISVILLE SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Michigan",
		"zip": "48208",
		"school": "UNIVERSITY OF DETROIT-MERCY",
		"program": "Dental School"
	},
	{
		"state": "Michigan",
		"zip": "48109",
		"school": "UNIVERSITY OF MICHIGAN SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "New York",
		"zip": "14214",
		"school": "UNIVERSITY OF BUFFALO SCHOOL OF DENTAL MEDICINE",
		"program": "Dental School"
	},
	{
		"state": "California",
		"zip": "94143",
		"school": "UNIVERSITY OF CALIFORNIA AT SAN FRANCISCO",
		"program": "Dental School"
	},
	{
		"state": "California",
		"zip": "94103",
		"school": "UNIVERSITY OF THE PACIFIC ARTHUR A. DUGONI SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Iowa",
		"zip": "52242",
		"school": "UNIVERSITY OF IOWA COLLEGE OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Illinois",
		"zip": "60515",
		"school": "MIDWESTERN UNIVERSITY - IL",
		"program": "Dental School"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "UNIVERSITY OF ILLINOIS AT CHICAGO COLLEGE OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Minnesota",
		"zip": "55454",
		"school": "UNIVERSITY OF MINNESOTA SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Nebraska",
		"zip": "68178",
		"school": "CREIGHTON UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Nebraska",
		"zip": "68198",
		"school": "UNIVERSITY OF NEBRASKA MEDICAL CENTER COLLGE OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Oregon",
		"zip": "97201",
		"school": "OREGON HEALTH & SCIENCE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Utah",
		"zip": "84095",
		"school": "ROSEMAN UNIVERSITY OF HEALTH SCIENCES",
		"program": "Dental School"
	},
	{
		"state": "Utah",
		"zip": "84108",
		"school": "UNIVERSITY OF UTAH",
		"program": "Dental School"
	},
	{
		"state": "Washington",
		"zip": "98195",
		"school": "UNIVERSITY OF WASHINGTON",
		"program": "Dental School"
	},
	{
		"state": "Wisconsin",
		"zip": "53233",
		"school": "MARQUETTE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Arizona",
		"zip": "85206",
		"school": "ARIZONA SCHOOL OF DENTISTRY & ORAL HEALTH",
		"program": "Dental School"
	},
	{
		"state": "Arizona",
		"zip": "85308",
		"school": "MIDWESTERN UNIVERSITY - AZ",
		"program": "Dental School"
	},
	{
		"state": "California",
		"zip": "90089",
		"school": "HERMAN OSTROW SCHOOL OF DENTISTRY OF USC",
		"program": "Dental School"
	},
	{
		"state": "California",
		"zip": "92350",
		"school": "LOMA LINDA UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "California",
		"zip": "90095",
		"school": "UNIVERSITY OF CALIFORNIA AT LOS ANGELES SCHOOL OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "California",
		"zip": "91766",
		"school": "WESTERN UNIVERSITY OF HEALTH SCIENCES",
		"program": "Dental School"
	},
	{
		"state": "Colorado",
		"zip": "80045",
		"school": "UNIVERSITY OF COLORADO",
		"program": "Dental School"
	},
	{
		"state": "Nevada",
		"zip": "89106",
		"school": "UNIVERSITY OF NEVADA LAS VEGAS",
		"program": "Dental School"
	},
	{
		"state": "Oklahoma",
		"zip": "73117",
		"school": "UNIVERSITY OF OKLAHOMA COLLEGE OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Texas",
		"zip": "75246",
		"school": "TEXAS A&M UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Dental School"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "UT HEALTH SCIENCE CENTER AT HOUSTON",
		"program": "Dental School"
	},
	{
		"state": "Texas",
		"zip": "78229",
		"school": "UT HEALTH SCIENCE CENTER AT SAN ANTONIO",
		"program": "Dental School"
	},
	{
		"state": "Ohio",
		"zip": "43210",
		"school": "OHIO STATE UNIVERSITY",
		"program": "Dental School"
	},
	{
		"state": "Maryland",
		"zip": "21201",
		"school": "UNIVERSITY OF MARYLAND",
		"program": "Dental School"
	},
	{
		"state": "District of Columbia",
		"zip": "20059",
		"school": "HOWARD UNIVERSITY COLLEGE OF DENTISTRY- Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "Massachusetts",
		"zip": "02118",
		"school": "BOSTON UNIVERSITY HENRY M. GOLDMAN SCHOOL OF DENTAL MEDICINE-Dental International",
		"program": "Dental School - International"
	},
	{
		"state": "Massachusetts",
		"zip": "21110",
		"school": "TUFTS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Dental School - International"
	},
	{
		"state": "Maine",
		"zip": "04103",
		"school": "UNIVERSITY OF NEW ENGLAND COLLEGE OF DENTAL MEDICINE- INTERNATIONAL",
		"program": "Dental School - International"
	},
	{
		"state": "Pennsylvania",
		"zip": "19140",
		"school": "TEMPLE UNIVERSITY THE MAURICE H. KORNBERG SCHOOL OF DENTISTRY-ATTRITION BASED PROGRAM",
		"program": "Dental School - International"
	},
	{
		"state": "Pennsylvania",
		"zip": "19140",
		"school": "TEMPLE UNIVERSITY THE MAURICE H. KORNBERG SCHOOL- INTERNATIONAL",
		"program": "Dental School - International"
	},
	{
		"state": "Pennsylvania",
		"zip": "19104",
		"school": "UNIVERSITY OF PENNSYLVANIA SCHOOL OF DENTAL MEDICINE",
		"program": "Dental School - International"
	},
	{
		"state": "Virginia",
		"zip": "23298",
		"school": "VIRGINIA COMMONWEALTH UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Dental School - International"
	},
	{
		"state": "New Jersey",
		"zip": "7103",
		"school": "RUTGERS SCHOOL OF DENTAL MEDICINE",
		"program": "Dental School - International"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "COLUMBIA UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "Dental School - International"
	},
	{
		"state": "New York",
		"zip": "10010",
		"school": "NEW YORK UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Dental School - International"
	},
	{
		"state": "Florida",
		"zip": "32610",
		"school": "UNIVERSITY OF FLORIDA COLLEGE OF DENTISTRY-Dental International Student",
		"program": "Dental School - International"
	},
	{
		"state": "Pennsylvania",
		"zip": "15261",
		"school": "UNIVERSITY OF PITTSBURGH SCHOOL OF DENTAL MEDICINE",
		"program": "Dental School - International"
	},
	{
		"state": "Alabama",
		"zip": "35294",
		"school": "UNIVERSITY OF ALABAMA - Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "Illinois",
		"zip": "62002",
		"school": "SOUTHERN ILLINOIS UNIVERSITY SCHOOL OF DENTAL MEDICINE Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "Louisiana",
		"zip": "70120",
		"school": "LOUISIANA STATE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Dental School - International"
	},
	{
		"state": "Indiana",
		"zip": "46202",
		"school": "INDIANA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Dental School - International"
	},
	{
		"state": "Kentucky",
		"zip": "40202",
		"school": "UNIVERSITY OF LOUISVILLE SCHOOL OF DENTISTRY-Dental International",
		"program": "Dental School - International"
	},
	{
		"state": "Michigan",
		"zip": "48109",
		"school": "UNIVERSITY OF MICHIGAN SCHOOL OF DENTISTRY",
		"program": "Dental School - International"
	},
	{
		"state": "New York",
		"zip": "14214",
		"school": "UNIVERSITY OF BUFFALO SCHOOL OF DENTAL MEDICINE",
		"program": "Dental School - International"
	},
	{
		"state": "California",
		"zip": "94143",
		"school": "UNIVERSITY OF CALIFORNIA AT SAN FRANCISCO SCHOOL OF DENTISTRY-Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "California",
		"zip": "94103",
		"school": "UNIVERSITY OF THE PACIFIC ARTHUR A. DUGONI SCHOOL OF DENTISTRY-Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "Iowa",
		"zip": "52242",
		"school": "UNIVERSITY OF IOWA COLLEGE OF DENTISTRY-Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "UNIVERSITY OF ILLINOIS AT CHICAGO COLLEGE OF DENTISTRY-Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "Minnesota",
		"zip": "55454",
		"school": "UNIVERSITY OF MINNESOTA SCHOOL OF DENTISTRY",
		"program": "Dental School - International"
	},
	{
		"state": "Nebraska",
		"zip": "68583",
		"school": "UNIVERSITY OF NEBRASKA MEDICAL CENTER COLLGE OF DENTISTRY",
		"program": "Dental School - International"
	},
	{
		"state": "Washington",
		"zip": "98195",
		"school": "UNIVERSITY OF WASHINGTON",
		"program": "Dental School - International"
	},
	{
		"state": "Wisconsin",
		"zip": "53233",
		"school": "MARQUETTE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Dental School - International"
	},
	{
		"state": "California",
		"zip": "90089",
		"school": "HERMAN OSTROW SCHOOL OF DENTISTRY OF USC- Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "California",
		"zip": "92354",
		"school": "LOMA LINDA UNIVERSITY- Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "California",
		"zip": "90095",
		"school": "UNIVERSITY OF CALIFORNIA AT LOS ANGELES SCHOOL OF DENTISTRY -Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "California",
		"zip": "91766",
		"school": "WESTERN UNIVERSITY OF HEALTH SCIENCES-Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "Colorado",
		"zip": "80045",
		"school": "UNIVERSITY OF COLORADO-Dental International Program",
		"program": "Dental School - International"
	},
	{
		"state": "Nevada",
		"zip": "89102",
		"school": "UNIVERSITY OF NEVADA- LAS VEGAS",
		"program": "Dental School - International"
	},
	{
		"state": "Oklahoma",
		"zip": "73117",
		"school": "UNIVERSITY OF OKLAHOMA COLLEGE OF DENTISTRY",
		"program": "Dental School - International"
	},
	{
		"state": "Connecticut",
		"zip": "06030",
		"school": "UNIVERSITY OF CONNECTICUT SCHOOL OF DENTAL MEDICINE",
		"program": "Endodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02118",
		"school": "BOSTON UNIVERSITY HENRY M. GOLDMAN SCHOOL OF DENTAL MEDICINE",
		"program": "Endodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02115",
		"school": "HARVARD UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Endodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02111",
		"school": "TUFTS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Endodontics"
	},
	{
		"state": "Maryland",
		"zip": "20889",
		"school": "NAVY MEDICINE PROFESSIONAL DEVELOPMENT CENTER",
		"program": "Endodontics"
	},
	{
		"state": "Maryland",
		"zip": "21201",
		"school": "UNIVERSITY OF MARYLAND SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "19141",
		"school": "ALBERT EINSTEIN MEDICAL CENTER",
		"program": "Endodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "19140",
		"school": "TEMPLE UNIVERSITY THE MAURICE H. KORNBERG SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "19104",
		"school": "UNIVERSITY OF PENNSYLVANIA SCHOOL OF DENTAL MEDICINE",
		"program": "Endodontics"
	},
	{
		"state": "Virginia",
		"zip": "23298",
		"school": "VIRGINIA COMMONWEALTH UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "New Jersey",
		"zip": "7103",
		"school": "RUTGERS SCHOOL OF DENTAL MEDICINE",
		"program": "Endodontics"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "COLUMBIA UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "Endodontics"
	},
	{
		"state": "New York",
		"zip": "10010",
		"school": "NEW YORK UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "New York",
		"zip": "11220",
		"school": "NYU LANGONE DENTAL MEDICINE - SUNSET PARK FAMILY HEALTH CENTER",
		"program": "Endodontics"
	},
	{
		"state": "New York",
		"zip": "11794",
		"school": "STONY BROOK UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Endodontics"
	},
	{
		"state": "New York",
		"zip": "11209",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/NEW YORK",
		"program": "Endodontics"
	},
	{
		"state": "Florida",
		"zip": "33328",
		"school": "NOVA SOUTHEASTERN UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "Endodontics"
	},
	{
		"state": "Florida",
		"zip": "32610",
		"school": "UNIVERSITY OF FLORIDA COLLEGE OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "15261",
		"school": "UNIVERSITY OF PITTSBURGH SCHOOL OF DENTAL MEDICINE",
		"program": "Endodontics"
	},
	{
		"state": "West Virginia",
		"zip": "26505",
		"school": "WEST VIRGINIA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Alabama",
		"zip": "35294",
		"school": "UNIVERSITY OF ALABAMA SCHOOL OF DENTISTRY AT UAB",
		"program": "Endodontics"
	},
	{
		"state": "Georgia",
		"zip": "30912",
		"school": "DENTAL COLLEGE OF GEORGIA AT AUGUSTA UNIVERSITY",
		"program": "Endodontics"
	},
	{
		"state": "Georgia",
		"zip": "30905",
		"school": "US ARMY DENTAL ACTIVITY/FORT GORDON",
		"program": "Endodontics"
	},
	{
		"state": "Louisiana",
		"zip": "70119",
		"school": "LSU HEALTH NEW ORLEANS SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Missouri",
		"zip": "63104",
		"school": "SAINT LOUIS UNIVERSITY CENTER FOR ADVANCED DENTAL EDUCATION",
		"program": "Endodontics"
	},
	{
		"state": "Missouri",
		"zip": "64108",
		"school": "UNIVERSITY OF MISSOURI-KANSAS CITY SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Mississippi",
		"zip": "39534",
		"school": "KEESLER MEDICAL CENTER",
		"program": "Endodontics"
	},
	{
		"state": "North Carolina",
		"zip": "27599",
		"school": "UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "North Carolina",
		"zip": "28310",
		"school": "US ARMY DENTAL ACTIVITY/UNIVERSITY OF THE HEALTH SCIENCES- FORT BRAGG",
		"program": "Endodontics"
	},
	{
		"state": "South Carolina",
		"zip": "29425",
		"school": "MEDICAL UNIVERSITY OF SOUTH CAROLINA COLLEGE OF DENTAL MEDICINE",
		"program": "Endodontics"
	},
	{
		"state": "Tennessee",
		"zip": "38163",
		"school": "UNIVERSITY OF TENNESSEE HEALTH SCIENCE CENTER",
		"program": "Endodontics"
	},
	{
		"state": "California",
		"zip": "94143",
		"school": "UNIVERSITY OF CALIFORNIA AT SAN FRANCISCO SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "California",
		"zip": "94103",
		"school": "UNIVERSITY OF THE PACIFIC ARTHUR A. DUGONI SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Iowa",
		"zip": "52242",
		"school": "UNIVERSITY OF IOWA COLLEGE OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "UNIVERSITY OF ILLINOIS AT CHICAGO COLLEGE OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Minnesota",
		"zip": "55454",
		"school": "UNIVERSITY OF MINNESOTA SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Nebraska",
		"zip": "68583",
		"school": "UNIVERSITY OF NEBRASKA MEDICAL CENTER COLLEGE OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Oregon",
		"zip": "97201",
		"school": "OREGON HEALTH & SCIENCE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Washington",
		"zip": "98195",
		"school": "UNIVERSITY OF WASHINGTON-HEALTH SCIENCES SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Wisconsin",
		"zip": "53233",
		"school": "MARQUETTE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "California",
		"zip": "90089",
		"school": "HERMAN OSTROW SCHOOL OF DENTISTRY OF USC",
		"program": "Endodontics"
	},
	{
		"state": "California",
		"zip": "92350",
		"school": "LOMA LINDA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "California",
		"zip": "90095",
		"school": "UNIVERSITY OF CALIFORNIA AT LOS ANGELES SCHOOL OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Texas",
		"zip": "75246",
		"school": "TEXAS A&M UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Endodontics"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "UT HEALTH SCIENCE CENTER AT HOUSTON",
		"program": "Endodontics"
	},
	{
		"state": "Texas",
		"zip": "78229",
		"school": "UT HEALTH SCIENCE CENTER AT SAN ANTONIO",
		"program": "Endodontics"
	},
	{
		"state": "Texas",
		"zip": "78236",
		"school": "WILFORD HALL AMBULATORY SURGICAL CENTER-59TH MEDICAL WING (WHASC)",
		"program": "Endodontics"
	},
	{
		"state": "Connecticut",
		"zip": "06810",
		"school": "DANBURY HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "Connecticut",
		"zip": "06106",
		"school": "HARTFORD HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "Connecticut",
		"zip": "06105",
		"school": "ST. FRANCIS HOSPITAL AND MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Connecticut",
		"zip": "06510",
		"school": "YALE NEW HAVEN HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "District of Columbia",
		"zip": "20032",
		"school": "DEPT OF BEHAVIORAL HEALTH/SAINT ELIZABETHS HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "District of Columbia",
		"zip": "20059",
		"school": "HOWARD UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "District of Columbia",
		"zip": "20422",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/DC",
		"program": "GPR"
	},
	{
		"state": "Delaware",
		"zip": "19801",
		"school": "CHRISTIANA CARE HEALTH SYSTEM",
		"program": "GPR"
	},
	{
		"state": "Massachusetts",
		"zip": "02139",
		"school": "CAMBRIDGE HEALTH ALLIANCE-DEPT. OF DENTISTRY & ORAL SURGERY",
		"program": "GPR"
	},
	{
		"state": "Massachusetts",
		"zip": "02114",
		"school": "MASSACHUSETTS GENERAL HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "Massachusetts",
		"zip": "01201",
		"school": "BERKSHIRE MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Massachusetts",
		"zip": "02111",
		"school": "TUFTS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "Massachusetts",
		"zip": "02130",
		"school": "V.A. Medical Center - Boston",
		"program": "GPR"
	},
	{
		"state": "Maryland",
		"zip": "21287",
		"school": "JOHNS HOPKINS HOSPITAL - DIVISION OF DENTISTRY AND ORAL SURGERY",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "8818",
		"school": "JOHN F. KENNEDY MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "7740",
		"school": "MONMOUTH MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "8104",
		"school": "VIRTUA WEST JERSEY HEALTH SYSTEM",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "19001",
		"school": "ABINGTON JEFFERSON HEALTH",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "19141",
		"school": "ALBERT EINSTEIN MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "17042",
		"school": "LEBANON VA MEDICAL CENTER - DENTAL SERVICE",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "18105",
		"school": "LEHIGH VALLEY HEALTH NETWORK",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "19607",
		"school": "PENN STATE HEALTH/ST. JOSEPH",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "18015",
		"school": "ST. LUKE\"S UNIVERSITY HEALTH NETWORK - DENTAL DEPARTMENT",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "19104",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/PHILADELPHIA",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "18711",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/WILKES-BARRE",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "17403",
		"school": "YORK HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "Rhode Island",
		"zip": "02903",
		"school": "SAMUELS SINCLAIR DENTAL CENTER/RI HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "Virginia",
		"zip": "24014",
		"school": "CARILION CLINIC",
		"program": "GPR"
	},
	{
		"state": "Virginia",
		"zip": "23708",
		"school": "NAVAL MEDICAL CENTER/PORTSMOUTH",
		"program": "GPR"
	},
	{
		"state": "Virginia",
		"zip": "22908",
		"school": "UNIVERSITY OF VIRGINIA HEALTH SYSTEM DEPARTMENT OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Virginia",
		"zip": "23667",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/HAMPTON",
		"program": "GPR"
	},
	{
		"state": "Virginia",
		"zip": "20889",
		"school": "WALTER REED NATIONAL MILITARY MEDICAL CENTER (WRNMMC)",
		"program": "GPR"
	},
	{
		"state": "Vermont",
		"zip": "05403",
		"school": "UNIVERSITY OF VERMONT MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Hawaii",
		"zip": "96813",
		"school": "THE QUEEN\"S MEDICAL CENTER - DENTAL CLINIC",
		"program": "GPR"
	},
	{
		"state": "Alaska",
		"zip": "99508",
		"school": "SOUTHCENTRAL FOUNDATION-ALASKA NATIVE MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "7042",
		"school": "HACKENSACK UMC - MOUNTAINSIDE HOSPITAL - DEPT. OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "7601",
		"school": "HACKENSACK UNIVERSITY MEDICAL CENTER-DEPARTMENT OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "7306",
		"school": "JERSEY CITY MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "7754",
		"school": "JERSEY SHORE UNIVERSITY MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "7960",
		"school": "MORRISTOWN MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "7112",
		"school": "NEWARK BETH ISRAEL MEDICAL CENTER-DEPARTMENT OF DENTSITRY",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "7901",
		"school": "OVERLOOK MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "8901",
		"school": "ROBERT WOOD JOHNSON UNIVERSITY HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "7103",
		"school": "RUTGERS SCHOOL OF DENTAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "7503",
		"school": "ST. JOSEPH\"S REGIONAL MEDICAL CENTER-DENTAL DEPARTMENT",
		"program": "GPR"
	},
	{
		"state": "New Jersey",
		"zip": "7018",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/EAST ORANGE",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10016",
		"school": "BELLEVUE HOSPITAL CENTER DENTAL DEPARTMENT",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10453",
		"school": "BRONXCARE HEALTH SYSTEM",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11212",
		"school": "BROOKDALE HOSPITAL MEDICAL CENTER - DEPT OF DENTAL MEDICINE AND OMS",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "COLUMBIA UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11235",
		"school": "CONEY ISLAND HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "12308",
		"school": "ELLIS HOSPITAL - DENTAL DEPARTMENT",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "13413",
		"school": "FAXTON-ST LUKE\"S HEALTHCARE",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11355",
		"school": "FLUSHING HOSPITAL MEDICAL CENTER-DEPARTMENT OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10037",
		"school": "HARLEM HOSPITAL CENTER DEPARTMENT OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11213",
		"school": "INTERFAITH MEDICAL CENTER DEPARTMENT OF DENTAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10461",
		"school": "JACOBI MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11418",
		"school": "JAMAICA HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11203",
		"school": "KINGS COUNTY HOSPITAL DOWNSTATE MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11203",
		"school": "KINGSBROOK JEWISH MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10451",
		"school": "LINCOLN MEDICAL & MENTAL HEALTH CENTER",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11219",
		"school": "MAIMONIDES MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10467",
		"school": "MONTEFIORE MEDICAL CENTER - DENTAL DEPT.",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10029",
		"school": "MOUNT SINAI HOSPITAL MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11554",
		"school": "NASSAU UNIVERSITY MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10595",
		"school": "NEW YORK MEDICAL COLLEGE SCHOOL OF MEDICINE",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11215",
		"school": "NEW YORK PRESBYTERIAN BROOKLYN METHODIST HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10065",
		"school": "NEW YORK PRESBYTERIAN HOSPITAL AT WEILL CORNELL",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11355",
		"school": "NEW YORK-PRESBYTERIAN QUEENS",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11794",
		"school": "SUNY STONY BROOK UNIV. MEDICAL CENTER/SCHOOL OF DENTAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11030",
		"school": "ZUCKER SCHOOL OF MEDICINE AT HOFSTRA/NORTHWELL AT NORTH SHORE UNIVERSITY HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11432",
		"school": "NYC HEALTH+HOSPITALS / QUEENS",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11209",
		"school": "NYU LANGONE DENTAL MEDICINE - SUNSET PARK FAMILY HEALTH CENTER",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10457",
		"school": "ST. BARNABAS HOSPITAL-DEPARTMENT OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11777",
		"school": "ST. CHARLES HOSPITAL AND REHABILITATION CENTER",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "12208",
		"school": "ST. PETER\"S HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10305",
		"school": "STATEN ISLAND UNIVERSITY HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11201",
		"school": "THE BROOKLYN HOSPITAL CENTER",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10010",
		"school": "V.A. MEDICAL CENTER- NEW YORK (Manhattan)",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11209",
		"school": "VETERANS AFFAIRS HARBOR HEALTHCARE/BROOKLYN",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11768",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/NORTHPORT",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11501",
		"school": "WINTHROP UNIVERSITY HOSPITAL - DENTAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11206",
		"school": "Woodhull Medical Center",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "11237",
		"school": "WYCKOFF HEIGHTS MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Florida",
		"zip": "32608",
		"school": "MALCOLM RANDALL VA MEDICAL CENTER/GAINESVILLE - DENTAL DEPARTMENT",
		"program": "GPR"
	},
	{
		"state": "Florida",
		"zip": "33176",
		"school": "UNIVERSITY OF MIAMI HOSPITAL - DENTAL DEPARTMENT",
		"program": "GPR"
	},
	{
		"state": "Florida",
		"zip": "33410",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/WEST PALM",
		"program": "GPR"
	},
	{
		"state": "Ohio",
		"zip": "44195",
		"school": "CLEVELAND CLINIC FOUNDATION",
		"program": "GPR"
	},
	{
		"state": "Ohio",
		"zip": "44128",
		"school": "CLEVELAND DENTAL INSTITUTE",
		"program": "GPR"
	},
	{
		"state": "Ohio",
		"zip": "44109",
		"school": "METROHEALTH MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Ohio",
		"zip": "44304",
		"school": "SUMMA HEALTH",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "15212",
		"school": "ALLEGHENY GENERAL HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "15261",
		"school": "UNIVERSITY OF PITTSBURGH MEDICAL CENTER/SCHOOL OF DENTAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "Pennsylvania",
		"zip": "15240",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/PITTSBURGH",
		"program": "GPR"
	},
	{
		"state": "West Virginia",
		"zip": "25701",
		"school": "CABELL HUNTINGTON HOSPITAL DENTAL SECTION",
		"program": "GPR"
	},
	{
		"state": "West Virginia",
		"zip": "26505",
		"school": "WEST VIRGINIA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Alabama",
		"zip": "35294",
		"school": "UNIVERSITY OF ALABAMA SCHOOL OF DENTISTRY AT UAB",
		"program": "GPR"
	},
	{
		"state": "Georgia",
		"zip": "30912",
		"school": "THE DENTAL COLLEGE OF GEORGIA AT AUGUSTA UNIVERSITY",
		"program": "GPR"
	},
	{
		"state": "Louisiana",
		"zip": "70119",
		"school": "LSU HEALTH NEW ORLEANS SCHOOL OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Missouri",
		"zip": "63141",
		"school": "MERCY HOSPITAL ST. LOUIS-DEPT. DENTAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "Missouri",
		"zip": "64139",
		"school": "TRUMAN MEDICAL CENTER-LAKEWOOD",
		"program": "GPR"
	},
	{
		"state": "North Carolina",
		"zip": "28203",
		"school": "CAROLINAS MEDICAL CENTER- DEPARTMENT OF ORAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "North Carolina",
		"zip": "27832",
		"school": "EAST CAROLINA UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "North Carolina",
		"zip": "28803",
		"school": "MOUNTAIN AREA HEALTH EDUCATION CENTER - DENTAL HEALTH CENTER",
		"program": "GPR"
	},
	{
		"state": "North Carolina",
		"zip": "27599",
		"school": "UNIVERSITY OF NORTH CAROLINA SCHOOL OF DENTISTRY/UNC HOSPITALS",
		"program": "GPR"
	},
	{
		"state": "North Carolina",
		"zip": "27157",
		"school": "WAKE FOREST BAPTIST MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "South Carolina",
		"zip": "29203",
		"school": "PALMETTO HEALTH USC MEDICAL GROUP DEPT. OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Tennessee",
		"zip": "37208",
		"school": "MEHARRY MEDICAL COLLEGE SCHOOL OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Tennessee",
		"zip": "37920",
		"school": "UNIVERSITY OF TENNESSEE MEDICAL CENTER(GPR)",
		"program": "GPR"
	},
	{
		"state": "Mississippi",
		"zip": "39216",
		"school": "UNIVERSITY OF MISSISSIPPI SCHOOL OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Indiana",
		"zip": "46202",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/INDIANAPOLIS",
		"program": "GPR"
	},
	{
		"state": "Kentucky",
		"zip": "40536",
		"school": "UNIVERSITY OF KENTUCKY COLLEGE OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Kentucky",
		"zip": "40292",
		"school": "UNIVERSITY OF LOUISVILLE SCHOOL OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Michigan",
		"zip": "48341",
		"school": "ST. JOSEPH MERCY HOSPITAL-OAKLAND",
		"program": "GPR"
	},
	{
		"state": "Michigan",
		"zip": "48109",
		"school": "UNIVERSITY OF MICHIGAN SCHOOL OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Michigan",
		"zip": "48201",
		"school": "VETERANS AFFAIRS MEDICAL CENTER-DETROIT - DENTAL SERVICE",
		"program": "GPR"
	},
	{
		"state": "Michigan",
		"zip": "48105",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/ANN ARBOR",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "14215",
		"school": "ERIE COUNTY MEDICAL CENTER - DENTAL DEPT.",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "14611",
		"school": "ROCHESTER GENERAL HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "13210",
		"school": "ROSWELL PARK CANCER INSTITTUE/SUNY BUFFALO",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "13203",
		"school": "ST. JOSEPH\"S HOSPITAL HEALTH CENTER",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "13210",
		"school": "SUNY UPSTATE MEDICAL UNIVERSITY- SYRACUSE",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "14620",
		"school": "UNIVERSITY OF ROCHESTER EASTMAN INSTITUTE FOR ORAL HEALTH",
		"program": "GPR"
	},
	{
		"state": "Ohio",
		"zip": "45409",
		"school": "MIAMI VALLEY HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "Ohio",
		"zip": "43210",
		"school": "OHIO STATE UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Ohio",
		"zip": "43614",
		"school": "THE UNIVERSITY OF TOLEDO - DIVISION OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "94304",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/PALO ALTO",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "94592",
		"school": "VETERANS AFFAIRS NORTHERN CALIFORNIA HEALTHCARE SYSTEM",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "93701",
		"school": "COMMUNITY MEDICAL CENTERS",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "94143",
		"school": "UNIVERSITY OF CALIFORNIA AT SAN FRANCISCO SCHOOL OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "94121",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/SAN FRANCISCO",
		"program": "GPR"
	},
	{
		"state": "Iowa",
		"zip": "52242",
		"school": "UNIVERSITY OF IOWA COLLEGE OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Illinois",
		"zip": "60657",
		"school": "ADVOCATE ILLINOIS MASONIC MEDICAL CENTER - DENTAL DEPT.",
		"program": "GPR"
	},
	{
		"state": "Illinois",
		"zip": "60153",
		"school": "LOYOLA UNIVERSITY MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Illinois",
		"zip": "60201",
		"school": "NORTH SHORE UNIV. HEALTH SYSTEM-EVANSTON HOSPITAL DENTAL DEPT",
		"program": "GPR"
	},
	{
		"state": "Illinois",
		"zip": "60611",
		"school": "NORTHWESTERN MEMORIAL HOSPITAL",
		"program": "GPR"
	},
	{
		"state": "Illinois",
		"zip": "61637",
		"school": "OSF SAINT FRANCIS MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/CHICAGO-JESSE BROWN DENTAL SERVICES",
		"program": "GPR"
	},
	{
		"state": "Minnesota",
		"zip": "55415",
		"school": "HENNEPIN COUNTY MEDICAL CENTER.",
		"program": "GPR"
	},
	{
		"state": "Minnesota",
		"zip": "55454",
		"school": "U. OF MINNESOTA- FAIRVIEW",
		"program": "GPR"
	},
	{
		"state": "Minnesota",
		"zip": "55417",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/MINNEAPOLIS",
		"program": "GPR"
	},
	{
		"state": "Nebraska",
		"zip": "68583",
		"school": "UNIVERSITY OF NEBRASKA MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Oregon",
		"zip": "97201",
		"school": "OREGON HEALTH & SCIENCE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Oregon",
		"zip": "97239",
		"school": "VA PORTLAND HEALTHCARE SYSTEM",
		"program": "GPR"
	},
	{
		"state": "Utah",
		"zip": "84112",
		"school": "UNIVERSITY OF UTAH COLLEGE OF MEDICINE",
		"program": "GPR"
	},
	{
		"state": "Utah",
		"zip": "84148",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/SALT LAKE CITY DENTAL SERVICE",
		"program": "GPR"
	},
	{
		"state": "Washington",
		"zip": "98105",
		"school": "SWEDISH MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Washington",
		"zip": "98195",
		"school": "UNIVERSITY OF WASHINGTON-HEALTH SCIENCES SCHOOL OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "Washington",
		"zip": "98108",
		"school": "V.A. PUGET SOUND HEALTH CARE SYSTEM-SEATTLE",
		"program": "GPR"
	},
	{
		"state": "Arkansas",
		"zip": "72205",
		"school": "UNIVERSITY OF ARKANSAS FOR MEDICAL SCIENCES",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "90509",
		"school": "HARBOR - UCLA MEDICAL CENTER/DENTAL",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "90089",
		"school": "HERMAN OSTROW SCHOOL OF DENTISTRY OF USC",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "92055",
		"school": "NAVAL HOSPITAL/CAMP PENDLETON-DENTAL DEPARTMENT",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "92134",
		"school": "NAVAL MEDICAL CENTER/SAN DIEGO-DENTAL DEPARTMENT",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "90095",
		"school": "UNIVERSITY OF CALIFORNIA AT LOS ANGELES SCHOOL OF DENTISTRY",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "90073",
		"school": "V.A. MEDICAL CENTER- WEST LOS ANGELES",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "92161",
		"school": "VA SAN DIEGO HEALTHCARE SYSTEM",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "92357",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/LOMA LINDA",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "91343",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/SEPULVEDA",
		"program": "GPR"
	},
	{
		"state": "Colorado",
		"zip": "80204",
		"school": "DENVER HEALTH MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Colorado",
		"zip": "80045",
		"school": "UNIVERSITY OF COLORADO DENVER SCHOOL OF DENTAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "Colorado",
		"zip": "80220",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/DENVER - DENTAL SERVICE",
		"program": "GPR"
	},
	{
		"state": "Nevada",
		"zip": "89102",
		"school": "UNIVERSITY OF NEVADA- LAS VEGAS",
		"program": "GPR"
	},
	{
		"state": "Oklahoma",
		"zip": "73104",
		"school": "OKLAHOMA CITY VA HEALTH CARE SYSTEM",
		"program": "GPR"
	},
	{
		"state": "Oklahoma",
		"zip": "73104",
		"school": "OU MEDICAL CENTER-DENTAL SERVICE",
		"program": "GPR"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "MICHAEL E. DEBAKEY VETERANS AFFAIRS MEDICAL CENTER/HOUSTON",
		"program": "GPR"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "UT HEALTH SCIENCE CENTER AT HOUSTON",
		"program": "GPR"
	},
	{
		"state": "Texas",
		"zip": "75216",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/DALLAS",
		"program": "GPR"
	},
	{
		"state": "Massachusetts",
		"zip": "02118",
		"school": "BOSTON UNIVERSITY HENRY M. GOLDMAN SCHOOL OF DENTAL MEDICINE",
		"program": "GPR"
	},
	{
		"state": "Ohio",
		"zip": "44501",
		"school": "ST. ELIZABETH CENTER",
		"program": "GPR"
	},
	{
		"state": "Ohio",
		"zip": "44708",
		"school": "MERCY MEDICAL CENTER",
		"program": "GPR"
	},
	{
		"state": "Ohio",
		"zip": "44106",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/CLEVELAND",
		"program": "GPR"
	},
	{
		"state": "New York",
		"zip": "10993",
		"school": "HELEN HAYES HOSPITAL DENTAL CLINIC",
		"program": "GPR"
	},
	{
		"state": "California",
		"zip": "90242",
		"school": "RANCHO LOS AMIGOS NATIONAL REHABILITATION CENTER",
		"program": "GPR"
	},
	{
		"state": "Massachusetts",
		"zip": "02115",
		"school": "HARVARD UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Implant Dentistry"
	},
	{
		"state": "Massachusetts",
		"zip": "02111",
		"school": "TUFTS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Implant Dentistry"
	},
	{
		"state": "Maryland",
		"zip": "21201",
		"school": "UNIVERSITY OF MARYLAND",
		"program": "Implant Dentistry"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "COLUMBIA UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "Implant Dentistry"
	},
	{
		"state": "Illinois",
		"zip": "62002",
		"school": "SOUTHERN ILLINOIS UNIVERSITY",
		"program": "Implant Dentistry"
	},
	{
		"state": "California",
		"zip": "92354",
		"school": "LOMA LINDA UNIVERSITY",
		"program": "Implant Dentistry"
	},
	{
		"state": "Connecticut",
		"zip": "06030",
		"school": "UNIVERSITY OF CONNECTICUT SCHOOL OF DENTAL MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "Connecticut",
		"zip": "06519",
		"school": "YALE NEW HAVEN HOSPITAL",
		"program": "Oral Surgery"
	},
	{
		"state": "District of Columbia",
		"zip": "20059",
		"school": "HOWARD UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "District of Columbia",
		"zip": "20010",
		"school": "MEDSTAR WASHINGTON HOSPITAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "Delaware",
		"zip": "19899",
		"school": "CHRISTIANA CARE HEALTH SYSTEM",
		"program": "Oral Surgery"
	},
	{
		"state": "Massachusetts",
		"zip": "02118",
		"school": "BOSTON UNIVERSITY HENRY M. GOLDMAN SCHOOL OF DENTAL MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "Massachusetts",
		"zip": "02114",
		"school": "MASSACHUSETTS GENERAL HOSPITAL",
		"program": "Oral Surgery"
	},
	{
		"state": "Massachusetts",
		"zip": "02111",
		"school": "TUFTS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "Maryland",
		"zip": "20889",
		"school": "NATIONAL CAPITAL CONSORTIUM",
		"program": "Oral Surgery"
	},
	{
		"state": "Maryland",
		"zip": "21201",
		"school": "UNIVERSITY OF MARYLAND SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Pennsylvania",
		"zip": "19140",
		"school": "TEMPLE UNIVERSITY HOSPITAL",
		"program": "Oral Surgery"
	},
	{
		"state": "Pennsylvania",
		"zip": "19107",
		"school": "THOMAS JEFFERSON UNIVERSITY HOSPITAL",
		"program": "Oral Surgery"
	},
	{
		"state": "Pennsylvania",
		"zip": "19104",
		"school": "UNIVERSITY OF PENNSYLVANIA SCHOOL OF DENTAL MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "Virginia",
		"zip": "23708",
		"school": "NAVAL MEDICAL CENTER/PORTSMOUTH",
		"program": "Oral Surgery"
	},
	{
		"state": "Virginia",
		"zip": "23298",
		"school": "VIRGINIA COMMONWEALTH UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Hawaii",
		"zip": "96817",
		"school": "US ARMY DENTAL ACTIVITY/TRIPLER",
		"program": "Oral Surgery"
	},
	{
		"state": "New Jersey",
		"zip": "7103",
		"school": "RUTGERS SCHOOL OF DENTAL MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "New Jersey",
		"zip": "7503",
		"school": "ST. JOSEPH\"S REGIONAL MEDICAL CENTER-DENTAL DEPARTMENT",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "11212",
		"school": "BROOKDALE HOSPITAL MEDICAL CENTER - DEPT OF DENTAL MEDICINE AND OMS",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "10037",
		"school": "HARLEM HOSPITAL CENTER DEPARTMENT OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "11549",
		"school": "HOFSTRA NORTHWELL SCHOOL OF DENTAL MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "11203",
		"school": "KINGS COUNTY HOSPITAL DOWNSTATE MEDICAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "10451",
		"school": "LINCOLN MEDICAL & MENTAL HEALTH CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "10467",
		"school": "MONTEFIORE MEDICAL CENTER - DENTAL DEPT.",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "10003",
		"school": "MOUNT SINAI BETH ISRAEL",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "10029",
		"school": "MOUNT SINAI HOSPITAL MEDICAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "11554",
		"school": "NASSAU UNIVERSITY MEDICAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "10595",
		"school": "NEW YORK MEDICAL COLLEGE SCHOOL OF MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "NEW YORK PRESBYTERIAN HOSPITAL - COLUMBIA UNIVERSITY MEDICAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "10065",
		"school": "NEW YORK PRESBYTERIAN HOSPITAL AT WEILL CORNELL",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "10010",
		"school": "NEW YORK UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "New York",
		"zip": "11206",
		"school": "WOODHULL MEDICAL AND MENTAL HEALTH CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "Florida",
		"zip": "33328",
		"school": "NOVA SOUTHEASTERN UNIVERSITY/BROWARD HEALTH MEDICAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "Florida",
		"zip": "32209",
		"school": "UNIVERSITY OF FLORIDA AT JACKSONVILLE",
		"program": "Oral Surgery"
	},
	{
		"state": "Florida",
		"zip": "32610",
		"school": "UNIVERSITY OF FLORIDA COLLEGE OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Florida",
		"zip": "33136",
		"school": "UNIVERSITY OF MIAMI/JACKSON MEMORIAL HOSPITAL",
		"program": "Oral Surgery"
	},
	{
		"state": "Pennsylvania",
		"zip": "15212",
		"school": "ALLEGHENY GENERAL HOSPITAL",
		"program": "Oral Surgery"
	},
	{
		"state": "Pennsylvania",
		"zip": "15261",
		"school": "UNIVERSITY OF PITTSBURGH SCHOOL OF DENTAL MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "West Virginia",
		"zip": "26506",
		"school": "WEST VIRGINIA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Alabama",
		"zip": "35294",
		"school": "UNIVERSITY OF ALABAMA SCHOOL OF DENTISTRY AT UAB",
		"program": "Oral Surgery"
	},
	{
		"state": "Georgia",
		"zip": "30905",
		"school": "DWIGHT DAVID EISENHOWER ARMY MEDICAL CENTER- FORT GORDON- GA",
		"program": "Oral Surgery"
	},
	{
		"state": "Georgia",
		"zip": "30322",
		"school": "EMORY UNIVERSITY SCHOOL OF MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "Georgia",
		"zip": "30912",
		"school": "THE DENTAL COLLEGE OF GEORGIA AT AUGUSTA UNIVERSITY",
		"program": "Oral Surgery"
	},
	{
		"state": "Louisiana",
		"zip": "70119",
		"school": "LSU HEALTH NEW ORLEANS SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Louisiana",
		"zip": "71103",
		"school": "LSU HEALTH SHREVEPORT SCHOOL OF MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "Missouri",
		"zip": "64108",
		"school": "UNIVERSITY OF MISSOURI-KANSAS CITY SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Mississippi",
		"zip": "39216",
		"school": "UNIVERSITY OF MISSISSIPPI SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "North Carolina",
		"zip": "27599",
		"school": "UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "North Carolina",
		"zip": "28310",
		"school": "US ARMY DENTAL ACTIVITY/FORT BRAGG",
		"program": "Oral Surgery"
	},
	{
		"state": "South Carolina",
		"zip": "29425",
		"school": "MEDICAL UNIVERSITY OF SOUTH CAROLINA COLLEGE OF DENTAL MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "Tennessee",
		"zip": "37208",
		"school": "MEHARRY MEDICAL COLLEGE SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Tennessee",
		"zip": "38163",
		"school": "UNIVERSITY OF TENNESSEE HEALTH SCIENCE CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "Tennessee",
		"zip": "37920",
		"school": "UNIVERSITY OF TENNESSEE MEDICAL CENTER (Knoxville)",
		"program": "Oral Surgery"
	},
	{
		"state": "Tennessee",
		"zip": "37232",
		"school": "VANDERBILT UNIVERSITY MEDICAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "Tennessee",
		"zip": "79920",
		"school": "WBAMC/USA DENTAC",
		"program": "Oral Surgery"
	},
	{
		"state": "California",
		"zip": "94143",
		"school": "UNIVERSITY OF CALIFORNIA AT SAN FRANCISCO SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "California",
		"zip": "93535",
		"school": "60TH MEDICAL GROUP/TRAVIS AFB",
		"program": "Oral Surgery"
	},
	{
		"state": "California",
		"zip": "93701",
		"school": "UCSF-FRESNO MEDICAL EDUCATION PROGRAM",
		"program": "Oral Surgery"
	},
	{
		"state": "California",
		"zip": "94103",
		"school": "UNIV OF THE PACIFIC/ALAMEDA HEALTH SYSTEM - HIGHLAND HOSPITAL",
		"program": "Oral Surgery"
	},
	{
		"state": "Iowa",
		"zip": "52242",
		"school": "UNIVERSITY OF IOWA COLLEGE OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Illinois",
		"zip": "61801",
		"school": "CARLE FOUNDATION HOSPITAL",
		"program": "Oral Surgery"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "COOK COUNTY HOSPITAL/JOHN H. STROGER- JR.",
		"program": "Oral Surgery"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "UNIVERSITY OF ILLINOIS AT CHICAGO COLLEGE OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Illinois",
		"zip": "60153",
		"school": "LOYOLA UNIVERSITY MEDICAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "Minnesota",
		"zip": "55905",
		"school": "MAYO SCHOOL OF GRADUATE MEDICAL EDUCATION",
		"program": "Oral Surgery"
	},
	{
		"state": "Minnesota",
		"zip": "55455",
		"school": "UNIVERSITY OF MINNESOTA SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Minnesota",
		"zip": "55422",
		"school": "NORTH MEMORIAL MEDICAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "Nebraska",
		"zip": "68198",
		"school": "UNIVERSITY OF NEBRASKA-COLLEGE OF MEDICINE",
		"program": "Oral Surgery"
	},
	{
		"state": "Oregon",
		"zip": "97201",
		"school": "OREGON HEALTH & SCIENCE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Oregon",
		"zip": "97227",
		"school": "LEGACY EMANUEL HOSP & HEALTH CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "Washington",
		"zip": "98431",
		"school": "MADIGAN ARMY MEDICAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "Washington",
		"zip": "98195",
		"school": "UNIVERSITY OF WASHINGTON-HEALTH SCIENCES SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Wisconsin",
		"zip": "54601",
		"school": "GUNDERSEN LUTHERAN MEDICAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "Wisconsin",
		"zip": "53226",
		"school": "MEDICAL COLLEGE OF WISCONSIN",
		"program": "Oral Surgery"
	},
	{
		"state": "Arizona",
		"zip": "85006",
		"school": "UNIVERSITY OF ARIZONA COLLEGE OF MEDICINE PHOENIX",
		"program": "Oral Surgery"
	},
	{
		"state": "California",
		"zip": "90509",
		"school": "HARBOR - UCLA MEDICAL CENTER/DENTAL",
		"program": "Oral Surgery"
	},
	{
		"state": "California",
		"zip": "90089",
		"school": "HERMAN OSTROW SCHOOL OF DENTISTRY OF USC",
		"program": "Oral Surgery"
	},
	{
		"state": "California",
		"zip": "92350",
		"school": "LOMA LINDA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "California",
		"zip": "92134",
		"school": "NAVAL MEDICAL CENTER/SAN DIEGO-DENTAL DEPARTMENT",
		"program": "Oral Surgery"
	},
	{
		"state": "California",
		"zip": "90095",
		"school": "UNIVERSITY OF CALIFORNIA AT LOS ANGELES SCHOOL OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Colorado",
		"zip": "80204",
		"school": "DENVER HEALTH MEDICAL CENTER",
		"program": "Oral Surgery"
	},
	{
		"state": "Oklahoma",
		"zip": "73117",
		"school": "UNIVERSITY OF OKLAHOMA COLLEGE OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Texas",
		"zip": "78236",
		"school": "59TH MED WING",
		"program": "Oral Surgery"
	},
	{
		"state": "Texas",
		"zip": "75390",
		"school": "PARKLAND MEMORIAL HOSPITAL",
		"program": "Oral Surgery"
	},
	{
		"state": "Texas",
		"zip": "78229",
		"school": "SAN ANTONIO MILITARY ORAL AND MAXILLOFACIAL SURGERY RESIDENCY",
		"program": "Oral Surgery"
	},
	{
		"state": "Texas",
		"zip": "75246",
		"school": "TEXAS A&M UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Oral Surgery"
	},
	{
		"state": "Texas",
		"zip": "77555",
		"school": "UNIVERSITY OF TEXAS MEDICAL BRANCH HOSPITAL",
		"program": "Oral Surgery"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "UT HEALTH SCIENCE CENTER AT HOUSTON",
		"program": "Oral Surgery"
	},
	{
		"state": "Texas",
		"zip": "78229",
		"school": "UT HEALTH SCIENCE CENTER AT SAN ANTONIO",
		"program": "Oral Surgery"
	},
	{
		"state": "Pennsylvania",
		"zip": "19102",
		"school": "DREXEL UNIVERSITY",
		"program": "Oral Surgery"
	},
	{
		"state": "Connecticut",
		"zip": "06030",
		"school": "UNIVERSITY OF CONNECTICUT SCHOOL OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "District of Columbia",
		"zip": "20059",
		"school": "HOWARD UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "District of Columbia",
		"zip": "20010",
		"school": "WASHINGTON HOSPITAL CENTER",
		"program": "Orthodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02118",
		"school": "BOSTON UNIVERSITY HENRY M. GOLDMAN SCHOOL OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02115",
		"school": "HARVARD UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02111",
		"school": "TUFTS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "Maryland",
		"zip": "21201",
		"school": "UNIVERSITY OF MARYLAND SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "19141",
		"school": "ALBERT EINSTEIN MEDICAL CENTER",
		"program": "Orthodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "19140",
		"school": "TEMPLE UNIVERSITY THE MAURICE H. KORNBERG SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "19104",
		"school": "UNIVERSITY OF PENNSYLVANIA SCHOOL OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "Virginia",
		"zip": "20889",
		"school": "NAVY MEDICINE PROFESSIONAL DEVELOPMENT CENTER",
		"program": "Orthodontics"
	},
	{
		"state": "Virginia",
		"zip": "23298",
		"school": "VIRGINIA COMMONWEALTH UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "New Jersey",
		"zip": "7103",
		"school": "RUTGERS SCHOOL OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "COLUMBIA UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "New York",
		"zip": "10453",
		"school": "BRONXCARE HEALTH SYSTEM",
		"program": "Orthodontics"
	},
	{
		"state": "New York",
		"zip": "11219",
		"school": "MAIMONIDES MEDICAL CENTER",
		"program": "Orthodontics"
	},
	{
		"state": "New York",
		"zip": "10467",
		"school": "MONTEFIORE MEDICAL CENTER - DENTAL DEPT.",
		"program": "Orthodontics"
	},
	{
		"state": "New York",
		"zip": "10010",
		"school": "NEW YORK UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "New York",
		"zip": "11220",
		"school": "NYU LANGONE DENTAL MEDICINE - BROOKLYN- NY",
		"program": "Orthodontics"
	},
	{
		"state": "New York",
		"zip": "10457",
		"school": "ST. BARNABAS HOSPITAL-DEPARTMENT OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "New York",
		"zip": "11794",
		"school": "STONY BROOK UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "Florida",
		"zip": "32211",
		"school": "JACKSONVILLE UNIVERSITY",
		"program": "Orthodontics"
	},
	{
		"state": "Florida",
		"zip": "33328",
		"school": "NOVA SOUTHEASTERN UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "Florida",
		"zip": "32610",
		"school": "UNIVERSITY OF FLORIDA COLLEGE OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "15601",
		"school": "SETON HILL UNIVERSITY",
		"program": "Orthodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "15261",
		"school": "UNIVERSITY OF PITTSBURGH SCHOOL OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "West Virginia",
		"zip": "26505",
		"school": "WEST VIRGINIA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Alabama",
		"zip": "35294",
		"school": "UNIVERSITY OF ALABAMA SCHOOL OF DENTISTRY AT UAB",
		"program": "Orthodontics"
	},
	{
		"state": "Georgia",
		"zip": "30912",
		"school": "DENTAL COLLEGE OF GEORGIA AT AUGUSTA UNIVERSITY",
		"program": "Orthodontics"
	},
	{
		"state": "Georgia",
		"zip": "30350",
		"school": "MEADOWLANDS HOSP AND MEDICAL CTR-GEORGIA SCHOOL OF ORTHODONTICS",
		"program": "Orthodontics"
	},
	{
		"state": "Louisiana",
		"zip": "70119",
		"school": "LSU HEALTH NEW ORLEANS SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Missouri",
		"zip": "63104",
		"school": "SAINT LOUIS UNIVERSITY CENTER FOR ADVANCED DENTAL EDUCATION",
		"program": "Orthodontics"
	},
	{
		"state": "Missouri",
		"zip": "64108",
		"school": "UNIVERSITY OF MISSOURI-KANSAS CITY SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "North Carolina",
		"zip": "27599",
		"school": "UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "South Carolina",
		"zip": "29425",
		"school": "MEDICAL UNIVERSITY OF SOUTH CAROLINA COLLEGE OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "Tennessee",
		"zip": "38163",
		"school": "UNIVERSITY OF TENNESSEE HEALTH SCIENCE CENTER",
		"program": "Orthodontics"
	},
	{
		"state": "Indiana",
		"zip": "46202",
		"school": "INDIANA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Kentucky",
		"zip": "40536",
		"school": "UNIVERSITY OF KENTUCKY COLLEGE OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Kentucky",
		"zip": "40202",
		"school": "UNIVERSITY OF LOUISVILLE SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Michigan",
		"zip": "48208",
		"school": "UNIVERSITY OF DETROIT MERCY SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Michigan",
		"zip": "48109",
		"school": "UNIVERSITY OF MICHIGAN SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "New York",
		"zip": "14214",
		"school": "UNIVERSITY OF BUFFALO SCHOOL OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "New York",
		"zip": "14620",
		"school": "UNIVERSITY OF ROCHESTER EASTMAN INSTITUTE FOR ORAL HEALTH",
		"program": "Orthodontics"
	},
	{
		"state": "Ohio",
		"zip": "44106",
		"school": "CASE WESTERN RESERVE UNIV. SCHOOL OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "Ohio",
		"zip": "43210",
		"school": "THE OHIO STATE UNIVERSITY",
		"program": "Orthodontics"
	},
	{
		"state": "California",
		"zip": "94143",
		"school": "UNIVERSITY OF CALIFORNIA AT SAN FRANCISCO SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "California",
		"zip": "94103",
		"school": "UNIVERSITY OF THE PACIFIC ARTHUR A. DUGONI SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Iowa",
		"zip": "52242",
		"school": "UNIVERSITY OF IOWA COLLEGE OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "UNIVERSITY OF ILLINOIS AT CHICAGO COLLEGE OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Minnesota",
		"zip": "55905",
		"school": "MAYO SCHOOL OF GRADUATE MEDICAL EDUCATION",
		"program": "Orthodontics"
	},
	{
		"state": "Minnesota",
		"zip": "55455",
		"school": "UNIVERSITY OF MINNESOTA SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Nebraska",
		"zip": "68198",
		"school": "UNIVERSITY OF NEBRASKA MEDICAL CENTER COLLEGE OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Oregon",
		"zip": "97201",
		"school": "OREGON HEALTH & SCIENCE UNIVERSITY",
		"program": "Orthodontics"
	},
	{
		"state": "Washington",
		"zip": "98195",
		"school": "UNIVERSITY OF WASHINGTON-HEALTH SCIENCES SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Wisconsin",
		"zip": "53233",
		"school": "MARQUETTE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Arizona",
		"zip": "85206",
		"school": "A.T. STILL UNIVERSITY ARIZONA SCHOOL OF DENTISTRY & ORAL HEALTH",
		"program": "Orthodontics"
	},
	{
		"state": "California",
		"zip": "90089",
		"school": "HERMAN OSTROW SCHOOL OF DENTISTRY OF USC",
		"program": "Orthodontics"
	},
	{
		"state": "California",
		"zip": "92350",
		"school": "LOMA LINDA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "California",
		"zip": "90095",
		"school": "UNIVERSITY OF CALIFORNIA AT LOS ANGELES SCHOOL OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Colorado",
		"zip": "80045",
		"school": "UNIVERSITY OF COLORADO DENVER SCHOOL OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "Nevada",
		"zip": "89106",
		"school": "UNIVERSITY OF NEVADA LAS VEGAS",
		"program": "Orthodontics"
	},
	{
		"state": "Nevada",
		"zip": "89014",
		"school": "ROSEMAN UNIVERSITY OF HEALTH SCIENCES COLLEGE OF DENTAL MEDICINE",
		"program": "Orthodontics"
	},
	{
		"state": "Oklahoma",
		"zip": "73117",
		"school": "UNIVERSITY OF OKLAHOMA COLLEGE OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Texas",
		"zip": "75246",
		"school": "TEXAS A&M UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Orthodontics"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "UT HEALTH SCIENCE CENTER AT HOUSTON",
		"program": "Orthodontics"
	},
	{
		"state": "Texas",
		"zip": "78229",
		"school": "UT HEALTH SCIENCE CENTER AT SAN ANTONIO",
		"program": "Orthodontics"
	},
	{
		"state": "Texas",
		"zip": "78236",
		"school": "WILFORD HALL AMBULATORY SURGICAL CENTER-59TH MEDICAL WING (WHASC)",
		"program": "Orthodontics"
	},
	{
		"state": "Connecticut",
		"zip": "06030",
		"school": "CONNECTICUT CHILDREN\"S MED CTR & UNIVERSITY OF CONNECTICUT HEALTH CTR",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Connecticut",
		"zip": "06519",
		"school": "YALE-NEW HAVEN HOSPITAL",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "District of Columbia",
		"zip": "20010",
		"school": "CHILDREN\"S NATIONAL HOSPITAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "District of Columbia",
		"zip": "20059",
		"school": "HOWARD UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Massachusetts",
		"zip": "02118",
		"school": "BOSTON UNIVERSITY HENRY M GOLDMAN SCHOOL OF DENTAL MEDICINE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Massachusetts",
		"zip": "02115",
		"school": "HARVARD UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Massachusetts",
		"zip": "01040",
		"school": "NYU LANGONE DENTAL MEDICINE - HOLYOKE HEALTH CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Massachusetts",
		"zip": "02111",
		"school": "TUFTS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Maryland",
		"zip": "21853",
		"school": "NYU Langone Health Maryland Chesapeake Health Care-AAPD",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Maryland",
		"zip": "21201",
		"school": "UNIVERSITY OF MARYLAND",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Pennsylvania",
		"zip": "17822",
		"school": "GEISINGER MEDICAL CENTER DENTAL DEPARTMENT",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Pennsylvania",
		"zip": "19134",
		"school": "ST. CHRISTOPHER\"S HOSPITAL FOR CHILDREN",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Pennsylvania",
		"zip": "19134",
		"school": "TEMPLE UNIV. HOSPITAL/EPISCOPAL DIVISION",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Pennsylvania",
		"zip": "19104",
		"school": "UNIVERSITY OF PENNSYLVANIA SCHOOL OF DENTAL MEDICINE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Rhode Island",
		"zip": "02907",
		"school": "NYU LANGONE PROVIDENCE RI",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Virginia",
		"zip": "23230",
		"school": "BON SECOURS ST. MARY\"S HOSPITAL OF RICHMOND",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Hawaii",
		"zip": "96740",
		"school": "NYU LANGONE DENTAL MEDICINE - WEST HAWAII COMMUNITY HEALTH CENTER (KEIKI HEALTH CENTER)",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Hawaii",
		"zip": "96792",
		"school": "NYU LANGONE DENTAL MEDICINE - WAIANAE COAST COMPREHENSIVE HEALTH CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Hawaii",
		"zip": "96819",
		"school": "NYU LANGONE DENTAL MEDICINE - KOKUA KALIHI VALLEY CHC",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Alaska",
		"zip": "99801",
		"school": "NYU LANGONE DENTAL MEDICINE - ANCHORAGE- AK SITE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New Jersey",
		"zip": "7103",
		"school": "RUTGERS SCHOOL OF DENTAL MEDICINE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New Jersey",
		"zip": "7503",
		"school": "ST. JOSEPH\"S REGIONAL MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "10453",
		"school": "BRONXCARE HEALTH SYSTEM",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "11212",
		"school": "BROOKDALE UNIV. HOSPITAL AND MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "10037",
		"school": "HARLEM HOSPITAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "11216",
		"school": "INTERFAITH MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "10461",
		"school": "JACOBI MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "",
		"school": "JAMAICA HOSPITAL",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "11219",
		"school": "MAIMONIDES MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "10467",
		"school": "MONTEFIORE MEDICAL CENTER/ALBERT EINSTEIN COLLEGE OF MEDICINE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "11102",
		"school": "MOUNT SINAI HOSPITAL MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "NEW YORK PRESBYTERIAN HOSPITAL - COLUMBIA UNIVERSITY MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "10010",
		"school": "NEW YORK UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "11220",
		"school": "NYU LANGONE DENTAL MEDICINE - BROOKLYN- NY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "10457",
		"school": "ST. BARNABAS HOSPITAL-DEPARTMENT OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "10305",
		"school": "STATEN ISLAND UNIVERSITY HOSPITAL",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "11794",
		"school": "STONY BROOK UNIVERSITY - SCHOOL OF DENTAL MEDICINE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "11206",
		"school": "WOODHULL MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "11237",
		"school": "WYCKOFF HEIGHTS MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "11040",
		"school": "ZUCKER SCHOOL OF MEDICINE AT HOFSTRA/NORTHWELL AT COHEN CHILDREN\"S MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Florida",
		"zip": "33178",
		"school": "NICKLAUS CHILDREN\"S HOSPITAL",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Florida",
		"zip": "33328",
		"school": "NOVA SOUTHEASTERN UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Florida",
		"zip": "33511",
		"school": "NYU LANGONE DENTAL MEDICINE - TAMPA- FL",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Florida",
		"zip": "32610",
		"school": "UNIVERSITY OF FLORIDA- GAINESVILLE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Florida",
		"zip": "32610",
		"school": "UNIVERSITY OF FLORIDA- NAPLES",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Pennsylvania",
		"zip": "15224",
		"school": "CHILDREN\"S HOSPITAL OF PITTSBURGH",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Pennsylvania",
		"zip": "15261",
		"school": "UNIVERSITY OF PITTSBURGH SCHOOL OF DENTAL MEDICINE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Alabama",
		"zip": "35294",
		"school": "UNIVERSITY OF ALABAMA AT BIRMINGHAM",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Georgia",
		"zip": "30912",
		"school": "DENTAL COLLEGE OF GEORGIA AT AUGUSTA UNIVERSITY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Louisiana",
		"zip": "70119",
		"school": "LOUISIANA STATE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Missouri",
		"zip": "63104",
		"school": "SAINT LOUIS UNIVERSITY HEALTH SCIENCE CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Missouri",
		"zip": "65806",
		"school": "NYU LANGONE DENTAL MEDICINE - SPRINGFIELD - MO",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Missouri",
		"zip": "64108",
		"school": "THE CHILDREN\"S MERCY HOSPITAL AND CLINICS",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Mississippi",
		"zip": "39216",
		"school": "THE UNIVERSITY OF MISSISSIPPI MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "North Carolina",
		"zip": "27834",
		"school": "EAST CAROLINA UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "North Carolina",
		"zip": "27599",
		"school": "UNIVERSITY OF NORTH CAROLINA - CHAPEL HILL",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "South Carolina",
		"zip": "29425",
		"school": "MEDICAL UNIVERSITY OF SOUTH CAROLINA",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Tennessee",
		"zip": "37167",
		"school": "NYU LANGONE DENTAL MEDICINE - TENNESSEE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Tennessee",
		"zip": "38163",
		"school": "UNIVERSITY OF TENNESSEE HEALTH SCIENCE CENTER- COLLEGE OF DENTISTRY- MEMPHIS",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Indiana",
		"zip": "46202",
		"school": "INDIANA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Kentucky",
		"zip": "40536",
		"school": "UNIVERSITY OF KENTUCKY COLLEGE OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Kentucky",
		"zip": "40202",
		"school": "UNIVERSITY OF LOUISVILLE SCHOOL OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Michigan",
		"zip": "48201",
		"school": "CHILDREN\"S HOSPITAL OF MICHIGAN",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Michigan",
		"zip": "48109",
		"school": "UNIVERSITY OF MICHIGAN",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "New York",
		"zip": "14620",
		"school": "UNIVERSITY OF ROCHESTER EASTMAN INSTITUTE FOR ORAL HEALTH",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Ohio",
		"zip": "44106",
		"school": "CASE WESTERN RESERVE UNIV. SCHOOL OF DENTAL MEDICINE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Ohio",
		"zip": "45229",
		"school": "CINCINNATI CHILDREN\"S HOSPITAL MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Ohio",
		"zip": "44109",
		"school": "METROHEALTH MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Ohio",
		"zip": "43205",
		"school": "THE OHIO STATE UNIVERSITY & NATIONWIDE CHILDREN\"S HOSPITAL",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Ohio",
		"zip": "43614",
		"school": "THE UNIVERSITY OF TOLEDO - DIVISION OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "California",
		"zip": "94143",
		"school": "UNIVERSITY OF CALIFORNIA- SAN FRANCISCO",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Iowa",
		"zip": "52242",
		"school": "UNIVERSITY OF IOWA COLLEGE OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Illinois",
		"zip": "60611",
		"school": "ANN & ROBERT H. LURIE CHILDREN\"S HOSPITAL OF CHICAGO",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "UNIVERSITY OF ILLINOIS AT CHICAGO",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Minnesota",
		"zip": "55454",
		"school": "UNIVERSITY OF MINNESOTA SCHOOL OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Minnesota",
		"zip": "55415",
		"school": "HENNEPIN COUNTY MEDICAL CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Nebraska",
		"zip": "68198",
		"school": "UNIVERSITY OF NEBRASKA MEDICAL CENTER COLLEGE OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Oregon",
		"zip": "97201",
		"school": "OREGON HEALTH & SCIENCE UNIVERSITY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Utah",
		"zip": "84113",
		"school": "PRIMARY CHILDREN\"S HOSPITAL",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Washington",
		"zip": "99201",
		"school": "NYU LANGONE DENTAL MEDICINE - YAKIMA VALLEY FARM WORKERS",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Washington",
		"zip": "98115",
		"school": "UNIVERSITY OF WASHINGTON- SEATTLE",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Wisconsin",
		"zip": "53226",
		"school": "CHILDREN\"S HOSPITAL OF WISCONSIN",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Arizona",
		"zip": "85007",
		"school": "NYU LANGONE DENTAL MEDICINE - CASS (CENTRAL ARIZONA SHELTER SERVICES)",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Arizona",
		"zip": "85745",
		"school": "NYU LANGONE DENTAL MEDICINE - EL RIO COMMUNITY HEALTH CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Arizona",
		"zip": "85008",
		"school": "NYU LANGONE DENTAL MEDICINE - MARICOPA INTEGRATED HEALTH SYSTEM (MIHS)",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "California",
		"zip": "90095",
		"school": "COMMUNITY HEALTH AND ADVOCACY TRAINING (CHAT-PD)/UCLA",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "California",
		"zip": "90089",
		"school": "HERMAN OSTROW SCHOOL OF DENTISTRY OF USC",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "California",
		"zip": "92350",
		"school": "LOMA LINDA UNIVERSITY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "California",
		"zip": "92123",
		"school": "NYU LANGONE DENTAL MEDICINE - SAN YSIDRO HEALTH CENTER",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "California",
		"zip": "90095",
		"school": "UNIVERSITY OF CALIFORNIA- LOS ANGELES - VENICE CLINIC",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Colorado",
		"zip": "80045",
		"school": "CHILDREN\"S HOSPITAL COLORADO",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Nevada",
		"zip": "89106",
		"school": "UNIVERSITY OF NEVADA- LAS VEGAS",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Texas",
		"zip": "75246",
		"school": "TEXAS A&M UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Texas",
		"zip": "78229",
		"school": "UNIVERSITY OF TEXAS HEALTH SCIENCE CENTER AT SAN ANTONIO",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "UT Health Science Center at Houston",
		"program": "Pediatric Dentistry"
	},
	{
		"state": "Connecticut",
		"zip": "06030",
		"school": "UNIVERSITY OF CONNECTICUT SCHOOL OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02118",
		"school": "BOSTON UNIVERSITY HENRY M. GOLDMAN SCHOOL OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02115",
		"school": "HARVARD UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02111",
		"school": "TUFTS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "Maryland",
		"zip": "20889",
		"school": "NAVY MEDICINE PROFESSIONAL DEVELOPMENT CENTER",
		"program": "Periodontics"
	},
	{
		"state": "Maryland",
		"zip": "21201",
		"school": "UNIVERSITY OF MARYLAND SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "19140",
		"school": "TEMPLE UNIVERSITY THE MAURICE H. KORNBERG SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "19104",
		"school": "UNIVERSITY OF PENNSYLVANIA SCHOOL OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "Virginia",
		"zip": "23298",
		"school": "VIRGINIA COMMONWEALTH UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "New Jersey",
		"zip": "7103",
		"school": "RUTGERS SCHOOL OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "COLUMBIA UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "New York",
		"zip": "10010",
		"school": "NEW YORK UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "New York",
		"zip": "11794",
		"school": "STONY BROOK UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "New York",
		"zip": "11209",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/NEW YORK",
		"program": "Periodontics"
	},
	{
		"state": "Florida",
		"zip": "33328",
		"school": "NOVA SOUTHEASTERN UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "Florida",
		"zip": "32610",
		"school": "UNIVERSITY OF FLORIDA COLLEGE OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "15261",
		"school": "UNIVERSITY OF PITTSBURGH SCHOOL OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "West Virginia",
		"zip": "26505",
		"school": "WEST VIRGINIA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Alabama",
		"zip": "35294",
		"school": "UNIVERSITY OF ALABAMA SCHOOL OF DENTISTRY AT UAB",
		"program": "Periodontics"
	},
	{
		"state": "Georgia",
		"zip": "30912",
		"school": "DENTAL COLLEGE OF GEORGIA AT AUGUSTA UNIVERSITY",
		"program": "Periodontics"
	},
	{
		"state": "Georgia",
		"zip": "30905",
		"school": "US ARMY DENTAL ACTIVITY/FORT GORDON",
		"program": "Periodontics"
	},
	{
		"state": "Louisiana",
		"zip": "70119",
		"school": "LSU HEALTH NEW ORLEANS SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Missouri",
		"zip": "63104",
		"school": "SAINT LOUIS UNIVERSITY CENTER FOR ADVANCED DENTAL EDUCATION",
		"program": "Periodontics"
	},
	{
		"state": "Missouri",
		"zip": "64108",
		"school": "UNIVERSITY OF MISSOURI-KANSAS CITY SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "North Carolina",
		"zip": "27599",
		"school": "UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "South Carolina",
		"zip": "29425",
		"school": "MEDICAL UNIVERSITY OF SOUTH CAROLINA COLLEGE OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "Tennessee",
		"zip": "38163",
		"school": "UNIVERSITY OF TENNESSEE HEALTH SCIENCE CENTER",
		"program": "Periodontics"
	},
	{
		"state": "New York",
		"zip": "14620",
		"school": "UNIVERSITY OF ROCHESTER EASTMAN INSTITUTE FOR ORAL HEALTH",
		"program": "Periodontics"
	},
	{
		"state": "Ohio",
		"zip": "44106",
		"school": "CASE WESTERN RESERVE UNIV. SCHOOL OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "Ohio",
		"zip": "43210",
		"school": "OHIO STATE UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "California",
		"zip": "94143",
		"school": "UNIVERSITY OF CALIFORNIA AT SAN FRANCISCO SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Iowa",
		"zip": "52242",
		"school": "UNIVERSITY OF IOWA COLLEGE OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "UNIVERSITY OF ILLINOIS AT CHICAGO COLLEGE OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Minnesota",
		"zip": "55905",
		"school": "MAYO SCHOOL OF GRADUATE MEDICAL EDUCATION",
		"program": "Periodontics"
	},
	{
		"state": "Minnesota",
		"zip": "55455",
		"school": "UNIVERSITY OF MINNESOTA SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Nebraska",
		"zip": "68198",
		"school": "UNIVERSITY OF NEBRASKA MEDICAL CENTER COLLEGE OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Oregon",
		"zip": "97201",
		"school": "OREGON HEALTH & SCIENCE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Washington",
		"zip": "98195",
		"school": "UNIVERSITY OF WASHINGTON-HEALTH SCIENCES SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Wisconsin",
		"zip": "53233",
		"school": "MARQUETTE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Wisconsin",
		"zip": "53295",
		"school": "ZABLOCKI VA GREAT LAKES/MILWAUKEE",
		"program": "Periodontics"
	},
	{
		"state": "California",
		"zip": "90089",
		"school": "HERMAN OSTROW SCHOOL OF DENTISTRY OF USC",
		"program": "Periodontics"
	},
	{
		"state": "California",
		"zip": "92354",
		"school": "LOMA LINDA UNIVERSITY",
		"program": "Periodontics"
	},
	{
		"state": "California",
		"zip": "90095",
		"school": "UNIVERSITY OF CALIFORNIA AT LOS ANGELES SCHOOL OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "California",
		"zip": "90073",
		"school": "VETERANS AFFAIRS GREATER LOS ANGELES HEALTHCARE SYSTEM",
		"program": "Periodontics"
	},
	{
		"state": "Colorado",
		"zip": "80045",
		"school": "UNIVERSITY OF COLORADO DENVER SCHOOL OF DENTAL MEDICINE",
		"program": "Periodontics"
	},
	{
		"state": "Oklahoma",
		"zip": "73117",
		"school": "UNIVERSITY OF OKLAHOMA COLLEGE OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Texas",
		"zip": "75246",
		"school": "TEXAS A&M UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Periodontics"
	},
	{
		"state": "Texas",
		"zip": "77054",
		"school": "UT HEALTH SCIENCE CENTER AT HOUSTON",
		"program": "Periodontics"
	},
	{
		"state": "Texas",
		"zip": "78229",
		"school": "UT HEALTH SCIENCE CENTER AT SAN ANTONIO",
		"program": "Periodontics"
	},
	{
		"state": "Texas",
		"zip": "78236",
		"school": "WILFORD HALL AMBULATORY SURGICAL CENTER-59TH MEDICAL WING (WHASC)",
		"program": "Periodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02114",
		"school": "HARVARD MEDICAL SCHOOL",
		"program": "Physiatry"
	},
	{
		"state": "Massachusetts",
		"zip": "02111",
		"school": "TUFTS UNIVERSITY SCHOOL OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "Maryland",
		"zip": "21215",
		"school": "SINAI HOSPITAL OF BALTIMORE",
		"program": "Physiatry"
	},
	{
		"state": "New Jersey",
		"zip": "8818",
		"school": "JFK Johnson Rehabilitation Inst",
		"program": "Physiatry"
	},
	{
		"state": "Pennsylvania",
		"zip": "19140",
		"school": "TEMPLE UNIVERSITY",
		"program": "Physiatry"
	},
	{
		"state": "Virginia",
		"zip": "23507",
		"school": "EASTERN VIRGINIA MEDICAL SCHOOL",
		"program": "Physiatry"
	},
	{
		"state": "Virginia",
		"zip": "23298",
		"school": "MEDICAL COLLEGE OF VIRGINIA/VIRGINIA COMMONWEALTH UNIVERSITY",
		"program": "Physiatry"
	},
	{
		"state": "Virginia",
		"zip": "22908",
		"school": "UNIVERSITY OF VIRGINIA HEALTH SYSTEM",
		"program": "Physiatry"
	},
	{
		"state": "New Jersey",
		"zip": "7101",
		"school": "UMDNJ - NEW JERSEY MEDICAL SCHOOL UNIVERSITY HOSPITAL",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "12208",
		"school": "ALBANY MEDICAL COLLEGE/ALBANY MEDICAL CENTER HOSPITAL",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "10467",
		"school": "ALBERT EINSTEIN COLLEGE OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "11021",
		"school": "HOFSTRA NORTH SHORE-LONG ISLAND JEWISH SCHOOL OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "11203",
		"school": "KINGSBROOK JEWISH MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "10029",
		"school": "MT SINAI SCHOOL OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "11554",
		"school": "NASSAU UNIVERSITY MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "10595",
		"school": "NEW YORK MEDICAL COLLEGE/METROPOLITAN",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "NEW YORK PRESBYTERIAN HOSPITAL/COLUMBIA/CORNELL",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "10016",
		"school": "NYU SCHOOL OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "11768",
		"school": "SUNY AT STONY BROOK",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "11203",
		"school": "SUNY HEALTH SCIENCE CENTER AT BROOKLYN",
		"program": "Physiatry"
	},
	{
		"state": "Florida",
		"zip": "33101",
		"school": "JACKSON MEMORIAL HOSP/JACKSON HEALTH SYSTEM",
		"program": "Physiatry"
	},
	{
		"state": "Florida",
		"zip": "33612",
		"school": "UNIVERSITY OF SOUTH FLORIDA COLLEGE OF MEDICINE/JAMES A. HALEY",
		"program": "Physiatry"
	},
	{
		"state": "Pennsylvania",
		"zip": "15261",
		"school": "UNIVERSITY HEALTH CENTER OF PITTSBURGH",
		"program": "Physiatry"
	},
	{
		"state": "Georgia",
		"zip": "30322",
		"school": "EMORY UNIVERSITY SCHOOL OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "Missouri",
		"zip": "65212",
		"school": "UNIVERSITY OF MISSOURI",
		"program": "Physiatry"
	},
	{
		"state": "North Carolina",
		"zip": "28203",
		"school": "CAROLINAS MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "North Carolina",
		"zip": "27858",
		"school": "PITT COUNTY MEDICAL HOSPITAL/ EAST CAROLINA UNIVERSITY",
		"program": "Physiatry"
	},
	{
		"state": "North Carolina",
		"zip": "27599",
		"school": "UNIVERSITY OF NORTH CAROLINA HOSPITALS",
		"program": "Physiatry"
	},
	{
		"state": "Tennessee",
		"zip": "37212",
		"school": "VANDERBILT UNIVERSITY SCHOOL OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "Indiana",
		"zip": "46202",
		"school": "INDIANA UNIVERSITY MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "Kentucky",
		"zip": "40536",
		"school": "UNIVERSITY OF KENTUCKY MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "Kentucky",
		"zip": "40202",
		"school": "UNIVERSITY OF LOUISVILLE SCHOOL OF DENTISTRY",
		"program": "Physiatry"
	},
	{
		"state": "Michigan",
		"zip": "48824",
		"school": "MICHIGAN STATE UNIVERSITY",
		"program": "Physiatry"
	},
	{
		"state": "Michigan",
		"zip": "48108",
		"school": "UNIVERSITY OF MICHIGAN MEDICAL SCHOOL",
		"program": "Physiatry"
	},
	{
		"state": "Michigan",
		"zip": "48201",
		"school": "WAYNE STATE UNIVERSITY - DETROIT MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "Michigan",
		"zip": "48073",
		"school": "WILLIAM BEAUMONT HOSPITAL",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "13210",
		"school": "SUNY UPSTATE MEDICAL UNIVERSITY",
		"program": "Physiatry"
	},
	{
		"state": "New York",
		"zip": "14642",
		"school": "UNIVERSITY OF ROCHESTER",
		"program": "Physiatry"
	},
	{
		"state": "Ohio",
		"zip": "44109",
		"school": "METROHEALTH - REHABILITATION INSTITUTE OF OHIO",
		"program": "Physiatry"
	},
	{
		"state": "Ohio",
		"zip": "43210",
		"school": "THE OHIO STATE UNIVERSITY",
		"program": "Physiatry"
	},
	{
		"state": "Ohio",
		"zip": "45267",
		"school": "UNIVERSITY OF CINCINNATI COLLEGE OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "Ohio",
		"zip": "43614",
		"school": "UNIVERSITY OF TOLEDO MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "California",
		"zip": "94063",
		"school": "STANFORD UNIVERSITY",
		"program": "Physiatry"
	},
	{
		"state": "California",
		"zip": "95817",
		"school": "UNIVERSITY OF CALIFORNIA (DAVIS) MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "Illinois",
		"zip": "60153",
		"school": "LOYOLA UNIVERSITY CHICAGO",
		"program": "Physiatry"
	},
	{
		"state": "Illinois",
		"zip": "60187",
		"school": "MARIANJOY REHAB HOSPITAL AND CLINICS",
		"program": "Physiatry"
	},
	{
		"state": "Illinois",
		"zip": "60611",
		"school": "MCGAW MEDICAL CENTER OF NORTHWESTERN UNIVERSITY",
		"program": "Physiatry"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "RUSH UNIVERSITY MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "Illinois",
		"zip": "60608",
		"school": "SCHWAB REHABILITATION HOSPITAL/CARE NETWORK",
		"program": "Physiatry"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "UNIVERSITY OF ILLINOIS CHICAGO",
		"program": "Physiatry"
	},
	{
		"state": "Minnesota",
		"zip": "55905",
		"school": "MAYO GRADUATE SCHOOL OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "Minnesota",
		"zip": "55455",
		"school": "UNIVERSITY OF MINNESOTA MEDICAL SCHOOL",
		"program": "Physiatry"
	},
	{
		"state": "Utah",
		"zip": "84132",
		"school": "UNIVERSITY OF UTAH MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "Washington",
		"zip": "98195",
		"school": "UNIVERSITY OF WASHINGTON MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "Wisconsin",
		"zip": "53226",
		"school": "MEDICAL COLLEGE OF WISCONSIN",
		"program": "Physiatry"
	},
	{
		"state": "Wisconsin",
		"zip": "53705",
		"school": "UNIVERSITY OF WISCONSIN HOSPITALS & CLINICS",
		"program": "Physiatry"
	},
	{
		"state": "Arkansas",
		"zip": "72205",
		"school": "UNIVERSITY OF ARKANSAS",
		"program": "Physiatry"
	},
	{
		"state": "California",
		"zip": "92354",
		"school": "LOMA LINDA UNIVERSITY",
		"program": "Physiatry"
	},
	{
		"state": "California",
		"zip": "92868",
		"school": "UNIVERSITY OF CALIFORNIA (IRVINE) MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "California",
		"zip": "90073",
		"school": "VA GREATER LA HEALTH CARE SYSTEM/UCLA",
		"program": "Physiatry"
	},
	{
		"state": "Colorado",
		"zip": "80045",
		"school": "UNIVERSITY OF COLORADO SCHOOL OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "Kansas",
		"zip": "66160",
		"school": "UNIVERSITY OF KANSAS MEDICAL CENTER",
		"program": "Physiatry"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "BAYLOR COLLEGE OF MEDICINE - HOUSTON",
		"program": "Physiatry"
	},
	{
		"state": "Texas",
		"zip": "75246",
		"school": "BAYLOR UNIVERSITY MEDICAL CENTER DALLAS",
		"program": "Physiatry"
	},
	{
		"state": "Texas",
		"zip": "78229",
		"school": "UNIVERSITY OF TEXAS-San Antonio",
		"program": "Physiatry"
	},
	{
		"state": "Texas",
		"zip": "75390",
		"school": "UNIVERSITY OF TEXAS - UT Southwestern",
		"program": "Physiatry"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "UNIVERSITY OF TEXAS-HOUSTON",
		"program": "Physiatry"
	},
	{
		"state": "Missouri",
		"zip": "63108",
		"school": "WASHINGTON UNIVERSITY/B-JH/SLCH CONSORTIUM",
		"program": "Physiatry"
	},
	{
		"state": "Alabama",
		"zip": "35249",
		"school": "UNIVERSITY OF ALABAMA",
		"program": "Physiatry"
	},
	{
		"state": "Pennsylvania",
		"zip": "19104",
		"school": "UNIVERSITY OF PENNSYLVANIA SCHOOL OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "Pennsylvania",
		"zip": "19107",
		"school": "THOMAS JEFFERSON UNIVERSITY",
		"program": "Physiatry"
	},
	{
		"state": "Louisiana",
		"zip": "70112",
		"school": "LSU SCHOOL OF MEDICINE",
		"program": "Physiatry"
	},
	{
		"state": "District of Columbia",
		"zip": "20307",
		"school": "MEDSTAR HEALTH/GEORGETOWN-NATIONAL REHABILITATION HOSPITAL",
		"program": "Physiatry"
	},
	{
		"state": "Connecticut",
		"zip": "06030",
		"school": "UNIVERSITY OF CONNECTICUT",
		"program": "Prosthodontics"
	},
	{
		"state": "District of Columbia",
		"zip": "20422",
		"school": "VETERANS AFFAIRS MEDICAL CENTER/DC",
		"program": "Prosthodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02118",
		"school": "BOSTON UNIVERSITY HENRY M. GOLDMAN SCHOOL OF DENTAL MEDICINE",
		"program": "Prosthodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02115",
		"school": "HARVARD UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Prosthodontics"
	},
	{
		"state": "Massachusetts",
		"zip": "02111",
		"school": "TUFTS UNIVERSITY SCHOOL OF DENTAL MEDICINE",
		"program": "Prosthodontics"
	},
	{
		"state": "Maryland",
		"zip": "20889",
		"school": "NAVY MEDICINE PROFESSIONAL DEVELOPMENT CENTER",
		"program": "Prosthodontics"
	},
	{
		"state": "Maryland",
		"zip": "21201",
		"school": "UNIVERSITY OF MARYLAND",
		"program": "Prosthodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "19104",
		"school": "UNIVERSITY OF PENNSYLVANIA SCHOOL OF DENTAL MEDICINE",
		"program": "Prosthodontics"
	},
	{
		"state": "New Jersey",
		"zip": "7103",
		"school": "RUTGERS SCHOOL OF DENTAL MEDICINE",
		"program": "Prosthodontics"
	},
	{
		"state": "New York",
		"zip": "10032",
		"school": "COLUMBIA UNIVERSITY COLLEGE OF DENTAL MEDICINE",
		"program": "Prosthodontics"
	},
	{
		"state": "New York",
		"zip": "10467",
		"school": "MONTEFIORE MEDICAL CENTER/ALBERT EINSTEIN COLLEGE OF MEDICINE",
		"program": "Prosthodontics"
	},
	{
		"state": "New York",
		"zip": "10010",
		"school": "NEW YORK UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Prosthodontics"
	},
	{
		"state": "New York",
		"zip": "11794",
		"school": "STONY BROOK UNIVERSITY - SCHOOL OF DENTAL MEDICINE",
		"program": "Prosthodontics"
	},
	{
		"state": "New York",
		"zip": "10010",
		"school": "V.A. MEDICAL CENTER- NEW YORK",
		"program": "Prosthodontics"
	},
	{
		"state": "Florida",
		"zip": "33328",
		"school": "NOVA SOUTHEASTERN UNIVERSITY",
		"program": "Prosthodontics"
	},
	{
		"state": "Florida",
		"zip": "32610",
		"school": "UNIVERSITY OF FLORIDA- GAINESVILLE",
		"program": "Prosthodontics"
	},
	{
		"state": "Pennsylvania",
		"zip": "15261",
		"school": "UNIVERSITY OF PITTSBURGH SCHOOL OF DENTAL MEDICINE",
		"program": "Prosthodontics"
	},
	{
		"state": "West Virginia",
		"zip": "26505",
		"school": "WEST VIRGINIA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Prosthodontics"
	},
	{
		"state": "Alabama",
		"zip": "35294",
		"school": "UNIVERSITY OF ALABAMA AT BIRMINGHAM",
		"program": "Prosthodontics"
	},
	{
		"state": "Georgia",
		"zip": "30912",
		"school": "DENTAL COLLEGE OF GEORGIA AT AUGUSTA UNIVERSITY",
		"program": "Prosthodontics"
	},
	{
		"state": "Georgia",
		"zip": "30905",
		"school": "US ARMY DENTAL ACTIVITY-FORT GORDON",
		"program": "Prosthodontics"
	},
	{
		"state": "Louisiana",
		"zip": "70119",
		"school": "LOUISIANA STATE UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Prosthodontics"
	},
	{
		"state": "North Carolina",
		"zip": "27599",
		"school": "UNIVERSITY OF NORTH CAROLINA - CHAPEL HILL",
		"program": "Prosthodontics"
	},
	{
		"state": "Tennessee",
		"zip": "38163",
		"school": "UNIVERSITY OF TENNESSEE HEALTH SCIENCE CENTER- COLLEGE OF DENTISTRY- MEMPHIS",
		"program": "Prosthodontics"
	},
	{
		"state": "Indiana",
		"zip": "46202",
		"school": "INDIANA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Prosthodontics"
	},
	{
		"state": "Kentucky",
		"zip": "40202",
		"school": "UNIVERSITY OF LOUISVILLE SCHOOL OF DENTISTRY",
		"program": "Prosthodontics"
	},
	{
		"state": "Michigan",
		"zip": "48109",
		"school": "UNIVERSITY OF MICHIGAN SCHOOL OF DENTISTRY",
		"program": "Prosthodontics"
	},
	{
		"state": "Michigan",
		"zip": "48201",
		"school": "VETERANS AFFAIRS MEDICAL CENTER-DETROIT - DENTAL SERVICE",
		"program": "Prosthodontics"
	},
	{
		"state": "New York",
		"zip": "14214",
		"school": "UNIVERSITY OF BUFFALO SCHOOL OF DENTAL MEDICINE",
		"program": "Prosthodontics"
	},
	{
		"state": "New York",
		"zip": "14620",
		"school": "UNIVERSITY OF ROCHESTER EASTMAN INSTITUTE FOR ORAL HEALTH",
		"program": "Prosthodontics"
	},
	{
		"state": "Ohio",
		"zip": "43210",
		"school": "THE OHIO STATE UNIVERSITY",
		"program": "Prosthodontics"
	},
	{
		"state": "California",
		"zip": "94143",
		"school": "UNIVERSITY OF CALIFORNIA- SAN FRANCISCO",
		"program": "Prosthodontics"
	},
	{
		"state": "Iowa",
		"zip": "52242",
		"school": "UNIVERSITY OF IOWA COLLEGE OF DENTISTRY",
		"program": "Prosthodontics"
	},
	{
		"state": "Illinois",
		"zip": "60612",
		"school": "UNIVERSITY OF ILLINOIS AT CHICAGO",
		"program": "Prosthodontics"
	},
	{
		"state": "Minnesota",
		"zip": "55455",
		"school": "UNIVERSITY OF MINNESOTA SCHOOL OF DENTISTRY",
		"program": "Prosthodontics"
	},
	{
		"state": "Minnesota",
		"zip": "55905",
		"school": "MAYO SCHOOL OF GRADUATE MEDICAL EDUCATION",
		"program": "Prosthodontics"
	},
	{
		"state": "Washington",
		"zip": "98195",
		"school": "UNIVERSITY OF WASHINGTON",
		"program": "Prosthodontics"
	},
	{
		"state": "Wisconsin",
		"zip": "53233",
		"school": "MARQUETTE UNIVERSITY",
		"program": "Prosthodontics"
	},
	{
		"state": "Wisconsin",
		"zip": "53295",
		"school": "ZABLOCKI V.A. GREAT LAKES - MILWAUKEE- WI",
		"program": "Prosthodontics"
	},
	{
		"state": "California",
		"zip": "90089",
		"school": "HERMAN OSTROW SCHOOL OF DENTISTRY OF USC",
		"program": "Prosthodontics"
	},
	{
		"state": "California",
		"zip": "92354",
		"school": "LOMA LINDA UNIVERSITY SCHOOL OF DENTISTRY",
		"program": "Prosthodontics"
	},
	{
		"state": "California",
		"zip": "90095",
		"school": "UNIVERSITY OF CALIFORNIA- LOS ANGELES",
		"program": "Prosthodontics"
	},
	{
		"state": "California",
		"zip": "90073",
		"school": "V.A. GREATER LOS ANGELES HEALTHCARE SYSTEM - WEST LOS ANGELES",
		"program": "Prosthodontics"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "MICHAEL E. DEBAKEY VETERANS AFFAIRS MEDICAL CENTER/HOUSTON",
		"program": "Prosthodontics"
	},
	{
		"state": "Texas",
		"zip": "75246",
		"school": "TEXAS A&M UNIVERSITY COLLEGE OF DENTISTRY",
		"program": "Prosthodontics"
	},
	{
		"state": "Texas",
		"zip": "78229",
		"school": "UNIVERSITY OF TEXAS HEALTH SCIENCE CENTER AT SAN ANTONIO",
		"program": "Prosthodontics"
	},
	{
		"state": "Texas",
		"zip": "77030",
		"school": "UT HEALTH SCIENCE CENTER AT HOUSTON",
		"program": "Prosthodontics"
	},
	{
		"state": "Texas",
		"zip": "78236",
		"school": "WILFORD HALL AMBULATORY SURGICAL CENTER-59TH MEDICAL WING (WHASC)",
		"program": "Prosthodontics"
	}
  ];

/* RUN */
init();