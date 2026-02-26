// Array de objetos con la lista de productos y sus unidades.
let products = [
    { name: "1.HUEVOS 1/2 ", unit: "UND", price: 0 },
    { name: "2.CASABE", unit: "UND", price: 0 },
    { name: "3.CHICHA GUARALAC 400GM", unit: "UND", price: 0 },
    { name: "4.CHORIZO AHUMADO", unit: "KG", price: 0 },
    { name: "5.CHORIZO PICANTE", unit: "KG", price: 0 },
    { name: "6.CHORIZO AJO", unit: "KG", price: 0 },
    { name: "7.CHORIZO JAMONADO", unit: "KG", price: 0 },
    { name: "8.CHORIZO VARIADO", unit: "KG", price: 0 },
    { name: "9.CHORIZO ", unit: "KG", price: 0 },
    { name: "10.CHULETA", unit: "KG", price: 0 },
    { name: "11.CREMA DON EUSTOQUIO500G", unit: "UND", price: 0 },
    { name: "12.DIABLITO PLUMROSE", unit: "UND", price: 0 },
    { name: "13.DULCE DE LECHE", unit: "UND", price: 0 },
    { name: "14.GELATINA ARCOIRIS", unit: "UND", price: 0 },
    { name: "15.GELATINA ARCOIRIS G", unit: "UND", price: 0 },
    { name: "16.HELADO CHOCO MANI", unit: "UND", price: 0 },
    { name: "17.HELADO CHOCOMANTECADO", unit: "UND", price: 0 },
    { name: "18.HELADO CHOCO MOROCHO", unit: "UND", price: 0 },
    { name: "19.HELADO CONO CHICLE", unit: "UND", price: 0 },
    { name: "20.HELADO EXOTICO", unit: "UND", price: 0 },
    { name: "21.HELADO MAX POLET", unit: "UND", price: 0 },
    { name: "22.HELADO POLET FERRERO", unit: "UND", price: 0 },
    { name: "23.HELADO SUPER CONO", unit: "UND", price: 0 },
    { name: "24.HELADO TINITA ", unit: "UND", price: 0 },
    { name: "25.HELADOS FRESS", unit: "UND", price: 0 },
    { name: "26.HUESO AHUMADO", unit: "KG", price: 0 },
    { name: "27.JAMON AHUMADO", unit: "KG", price: 0 },
    { name: "28.JAMON AREPERO", unit: "KG", price: 0 },
    { name: "29.JAMON DE PAVO", unit: "KG", price: 0 },
    { name: "30.JAMON ESPALDA ORST", unit: "KG", price: 0 },
    { name: "31.JAMON ESPALDA VIGOR", unit: "KG", price: 0 },
    { name: "32.JAMON PIERNA VIGOR", unit: "KG", price: 0 },
    { name: "33.JAMON PIERNA ARICHUNA", unit: "KG", price: 0 },
    { name: "34.JAMON PIERNA FIESTA", unit: "KG", price: 0 },
    { name: "35.JUGO GUARALAC 1.5ML", unit: "UND", price: 0 },
    { name: "36.JUGO GUARALAC 400CC", unit: "UND", price: 0 },
    { name: "37.JUGO GUARALAC 900CC", unit: "UND", price: 0 },
    { name: "38.JUGO JUSTY 1.5L", unit: "UND", price: 0 },
    { name: "39.LECHE PURISIMA COMPLETA", unit: "UND", price: 0 },
    { name: "40.LECHE PURISIMA DESCREMADA", unit: "UND", price: 0 },
    { name: "41.LECHE PURISIMA DESLACTOSADA", unit: "UND", price: 0 },
    { name: "42.LECHE SAN SIMON", unit: "UND", price: 0 },
    { name: "43.MARQUESAS", unit: "UND", price: 0 },
    { name: "44.MASA GRANDE", unit: "UND", price: 0 },
    { name: "45.MASAS PEQUEÑA", unit: "UND", price: 0 },
    { name: "46.MAX POÑLET WHITE FERRERO", unit: "UND", price: 0 },
    { name: "47.MINI SALCHICHAS FIESTA", unit: "UND", price: 0 },
    { name: "48.MORTADELA ALIBAL 1/2KG", unit: "UND", price: 0 },
    { name: "49.MORTADELA ALIBAL DE 1KG", unit: "UND", price: 0 },
    { name: "50.MORTADELA ALPRO 400G", unit: "UND", price: 0 },
    { name: "51MORTADELA ALPRO 900G", unit: "UND", price: 0 },
    { name: "52.MORTADELA ARICHUNA", unit: "UND", price: 0 },
    { name: "53.MORTADELA BOLGNA 1/2KG", unit: "UND", price: 0 },
    { name: "54.MORTADELA CARACAS 900G", unit: "KG", price: 0 },
    { name: "55.MORTADELA ESPECIAL", unit: "KG", price: 0 },
    { name: "56.MORTADELA EXTRA", unit: "KG", price: 0 },
    { name: "57.MORTADELA PLUMROSE 1KG", unit: "UND", price: 0 },
    { name: "58.PUNTA DEL MONTE 1/2KG", unit: "UND", price: 0 },
    { name: "59.PUNTA DEL MONTE DE 1KG", unit: "UND", price: 0 },
    { name: "60.MORTADELA TAPARA", unit: "KG", price: 0 },
    { name: "61.NATILLA GUARALAC", unit: "UND", price: 0 },
    { name: "62.NATILLA VEGA", unit: "UND", price: 0 },
    { name: "63.PAN ARABE", unit: "UND", price: 0 },
    { name: "64.PAN DE SANDWICH INTEGRAL", unit: "UND", price: 0 },
    { name: "65.PAN DE SANDWICH NORMAL", unit: "UND", price: 0 },
    { name: "66.QUESILLO ARCOIRIS", unit: "UND", price: 0 },
    { name: "67.QUESO DE CABRA", unit: "KG", price: 0 },
    { name: "68.QUESO AMARILLO", unit: "KG", price: 0 },
    { name: "69.QUESO BLANCO", unit: "KG", price: 0 },
    { name: "70.QUESO CREMA DE CABRA", unit: "UND", price: 0 },
    { name: "71.QUESO CRINEJA", unit: "KG", price: 0 },
    { name: "72.QUESO DE AÑO POTE", unit: "UND", price: 0 },
    { name: "73.QUESO DE MANO POTE VERANO", unit: "UND", price: 0 },
    { name: "74.QUESO GUAYANEZ", unit: "KG", price: 0 },
    { name: "75.QUESO MOZZARELLA", unit: "KG", price: 0 },
    { name: "76.QUESO MOZZARELLA PIEZA", unit: "KG", price: 0 },
    { name: "77.QUESO PAISA", unit: "KG", price: 0 },
    { name: "78.QUESO PECORINO", unit: "KG", price: 0 },
    { name: "80.QUESO AHUMADO ", unit: "KG", price: 0 },
    { name: "81.QUESO RAYADO", unit: "KG", price: 0 },
    { name: "82.QUESO REQUESON", unit: "KG", price: 0 },
    { name: "83.RECORTE CHULETA-TOCINETA", unit: "KG", price: 0 },
    { name: "84.RECORTE VARIOS", unit: "KG", price: 0 },
    { name: "85.REFRESCO GLUP 2L", unit: "UND", price: 0 },
    { name: "86.REFRESCO PEPSI 1.5 LT", unit: "KG", price: 0 },
    { name: "87.RICOTA CABRA BARAGUA", unit: "UND", price: 0 },
    { name: "88.RICOTA DE CABRA", unit: "KG", price: 0 },
    { name: "89.RICOTA POTE VERANO", unit: "UND", price: 0 },
    { name: "90.SALCHICA POLACA", unit: "KG", price: 0 },
    { name: "91.SALCHICHA DE POLLO ALPRO", unit: "KG", price: 0 },
    { name: "92SUERO GUARALAC", unit: "UND", price: 0 },
    { name: "93.SUERO KASERO 850 ML", unit: "UND", price: 0 },
    { name: "94.SUERO PICANTE", unit: "UND", price: 0 },
    { name: "95.SUERO PICANTE PEQUE", unit: "UND", price: 0 },
    { name: "96.SUERO VEGA 800ML", unit: "UND", price: 0 },
    { name: "97.TOCINETA", unit: "KG", price: 0 },
    { name: "98.YOGUR ARCOIRIS GRAND", unit: "UND", price: 0 },
    { name: "99.YOGUR ARCOIRIS PEQ", unit: "UND", price: 0 },
    { name: "100.YOGURT GUARALAC 400 ML", unit: "UND", price: 0 },
    { name: "101.YOGURT NATURAL", unit: "UND", price: 0 },
];

// === BASE DE DATOS MANUAL DE CLIENTES (PARA RELLENAR) ===
// AGREGA AQUÍ TUS CLIENTES. Sigue el formato: { cedula: \"NUMERO\", name: \"NOMBRE\" },
const manualClients = [
    { cedula: "10123456", name: "PEDRO PEREZ" },
    { cedula: "20987654", name: "MARIA RODRIGUEZ" },
    { cedula: "30555666", name: "JUAN LOPEZ" },
    { cedula: "28610986", name: "JOSE COLMENAREZ" },
    { cedula: "11132253", name: "RESIDENCIAS MARIELLA" },
    { cedula: "15803986", name: "NEYCEL TORREALBA" },
    { cedula: "29805081", name: "ROXIEL VELEZ" },
    { cedula: "84502541", name: "ALBERTO CIRE" },
    { cedula: "7493115", name: "AMIR MIAHMUD" },
    { cedula: "16403277", name: "ANDREINA GUARAMACO" },
    { cedula: "25570449", name: "ARMANDO HERRERA" },
    { cedula: "296773165", name: "CAFFE MILENIUM FJ C.A" },
    { cedula: "5937994", name: "CARLOS CATIVELI" },
    { cedula: "8425881", name: "CARLOS PARADA" },
    { cedula: "317426649", name: "CARNE LICOR 0309" },
    { cedula: "20471118", name: "DARWUIN FREITEZ" },
    { cedula: "30838743-6", name: "DELI CHURROS, C.A" },
    { cedula: "11694399", name: "DELIA GOMEZ" },
    { cedula: "4082004", name: "DELIA URDANETA" },
    { cedula: "24354715", name: "DIGMAR SIVIAN" },
    { cedula: "7439328", name: "DORAIMA ALAÑA" },
    { cedula: "11799142", name: "ELIANA PEREZ" },
    { cedula: "24162706", name: "ELIANNI ROJAS" },
    { cedula: "2919753", name: "ELIGIO ALVAREZ" },
    { cedula: "4182464", name: "ELIZABETH MARTINEZ" },
    { cedula: "12435444", name: "EREADA" },
    { cedula: "26260297", name: "ESCARLEH ALVARADO" },
    { cedula: "5223562", name: "FLOR PERNIA" },
    { cedula: "19726101", name: "GLADIMAR GONZALEZ" },
    { cedula: "23811300", name: "HECTOR CASTILLO" },
    { cedula: "18998813", name: "HECTOR RIVERO" },
    { cedula: "12022429", name: "HECTOR VEGAS" },
    { cedula: "32066756", name: "HERNANDEZ RENZIMAR" },
    { cedula: "7312212", name: "HILDA ALVARADO" },
    { cedula: "15264669", name: "IRENE PERNIA" },
    { cedula: "10843724", name: "JHONNY CONSTANTINO" },
    { cedula: "11427978", name: "JOSE RAFAEL GONZALEZ" },
    { cedula: "21009335", name: "KENNY" },
    { cedula: "25147161", name: "LEIDY PORTILLO" },
    { cedula: "9547326", name: "LINAREZ ISABEL" },
    { cedula: "33136692", name: "LUIS DAVID AGUILAR" },
    { cedula: "19105684", name: "LUZ VAZQUE" },
    { cedula: "30987425", name: "MAIKOR ARROLLO" },
    { cedula: "11789342", name: "MARGELIS RANGEL" },
    { cedula: "3537710", name: "MARI DE LOPEZ" },
    { cedula: "5252991", name: "MARIA ALMAO" },
    { cedula: "9621350", name: "MARIA ISABEL" },
    { cedula: "12884644", name: "MARILIN GONZALES" },
    { cedula: "16293517", name: "MARY CALANCHE" },
    { cedula: "18439768", name: "MAXULI OLIVO" },
    { cedula: "28156542", name: "MAYA ELFAKI" },
    { cedula: "15230093", name: "MIGUEL" },
    { cedula: "19106392", name: "MIGUEL REINOSO" },
    { cedula: "7403989", name: "NORKIS SILVA" },
    { cedula: "7373774", name: "OLIVIA PARRA" },
    { cedula: "9555110", name: "OMAR CASTILLO" },
    { cedula: "18261070", name: "RAIZA MUJICA" },
    { cedula: "25293258", name: "RANDOLFO ALVARADO" },
    { cedula: "4066376", name: "RITO MENDOZA" },
    { cedula: "7387874", name: "ROSA MEDINA" },
    { cedula: "4809429", name: "ROSA OSSO" },
    { cedula: "30588211", name: "SOLANYELIS CASTILLO" },
    { cedula: "16009493", name: "SUGEN NAZA" },
    { cedula: "306043438", name: "U.E COLEGIO PABLO VI" },
    { cedula: "15176917", name: "YARITZA SOSA" },
    { cedula: "5246271", name: "YELIZAS YEPEZ" },
    { cedula: "27250993", name: "YETSIMAR CASTILLO" },
    { cedula: "29976864", name: "YOSEDIG EVIEZ" },
    { cedula: "4733784", name: "ZUHAYLL AREVALOS" },
    { cedula: "7441291", name: "YARITZA PASTORA" },
    { cedula: "20010925", name: "MARIA MORENO" },
    { cedula: "14159345", name: "YEREINA CALMENARES" },
    { cedula: "17506038", name: "ORLANDO MARTINEZ" },
    { cedula: "19486592", name: "19486592" },
    { cedula: "15750268", name: "CARLOS RAFAEL MUGNO URBINA" }
];

// Elementos del menú hamburguesa
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuPrint = document.getElementById('menuPrint');
const menuQr = document.getElementById('menuQr');
const menuScan = document.getElementById('menuScan');
const menuOptions = document.getElementById('menuOptions');

// Referencias a los elementos del DOM
const clientNameInput = document.getElementById('clientNameInput');
const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const addedProductsList = document.getElementById('addedProductsList');
const scannerInputContainer = document.getElementById('scannerInputContainer');
const scannerInput = document.getElementById('scannerInput');
const suggestionsList = document.getElementById('suggestionsList');

// Elementos del DOM para la calculadora
const calculatorModal = document.getElementById('calculatorModal');
const calculatorTitle = document.getElementById('calculatorTitle');
const calculatorInput = document.getElementById('calculatorInput');
const calculatorButtons = document.querySelectorAll('#calculatorModal .calculator-button');
const closeCalculatorButton = document.getElementById('closeCalculatorButton');
const acceptButton = document.getElementById('acceptButton');

// Elementos del DOM para la mini-modal de unidades
const unitModal = document.getElementById('unitModal');
const unitModalProduct = document.getElementById('unitModalProduct');
const selectKgButton = document.getElementById('selectKgButton');
const selectGramosButton = document.getElementById('selectGramosButton');
const selectBsButton = document.getElementById('selectBsButton');
const selectLonjaButton = document.getElementById('selectLonjaButton');
const closeUnitModal = document.getElementById('closeUnitModal');
const unitOptions = [selectKgButton, selectGramosButton, selectBsButton, selectLonjaButton];
let selectedUnitIndex = 0;

// Elementos del DOM para el QR
const qrModal = document.getElementById('qrModal');
const closeQrModal = document.getElementById('closeQrModal');
const qrcodeContainer = document.getElementById('qrcode');

// Elementos de la nueva modal de opciones
const optionsModal = document.getElementById('optionsModal');
const closeOptionsModal = document.getElementById('closeOptionsModal');
const printCounterDisplay = document.getElementById('printCounterDisplay');
const resetCounterButton = document.getElementById('resetCounterButton');

// INICIO: Nuevos elementos para la gestión de precios
const managePricesButton = document.getElementById('managePricesButton');
const priceModal = document.getElementById('priceModal');
const closePriceModal = document.getElementById('closePriceModal');
const priceSearchInput = document.getElementById('priceSearchInput');
const priceListContainer = document.getElementById('priceListContainer');
const savePricesButton = document.getElementById('savePricesButton');

// Elementos del DOM para la impresión
const printOnlyContent = document.getElementById('printOnlyContent');
const printProductsList = document.getElementById('printProductsList');
const printClientName = document.getElementById('printClientName');

// Elementos para el modal de confirmación
const confirmationModal = document.getElementById('confirmationModal');
const confirmPrintButton = document.getElementById('confirmPrintButton');
const cancelPrintButton = document.getElementById('cancelPrintButton');

// Nuevos elementos para restaurar y confirmar reseteo
const editCounterButton = document.getElementById('editCounterButton');
const restoreModal = document.getElementById('restoreModal');
const restoreInput = document.getElementById('restoreInput');
const confirmRestoreButton = document.getElementById('confirmRestoreButton');
const cancelRestoreButton = document.getElementById('cancelRestoreButton');
const resetConfirmModal = document.getElementById('resetConfirmModal');
const confirmResetButton = document.getElementById('confirmResetButton');
const cancelResetButton = document.getElementById('cancelResetButton');

// ELEMENTOS DEL NUEVO MODAL INICIAL
const initialSetupModal = document.getElementById('initialSetupModal');
const initialCedula = document.getElementById('initialCedula');
const initialName = document.getElementById('initialName');
const startAppButton = document.getElementById('startAppButton');

// Estado de la aplicación
let filteredProducts = [];
let selectedProductIndex = -1;
let addedProducts = [];
let currentProduct = null;
let currentUnit = null;
let currentNumericValue = 0;
let productPrices = {}; // Para almacenar los precios cargados

// === GESTIÓN DE DATOS DE CLIENTES (CÉDULA Y NOMBRE) ===
let clientsData = JSON.parse(localStorage.getItem('clientsData')) || [];
let savedClientNames = JSON.parse(localStorage.getItem('clientNames')) || [];
let currentClientCedula = '';

function saveClientData(cedula, name) {
    name = name.trim();
    cedula = cedula ? cedula.trim() : "";

    if (!name) return;

    if (cedula) {
        const existingIndex = clientsData.findIndex(c => c.cedula === cedula);
        if (existingIndex >= 0) {
            clientsData[existingIndex].name = name;
        } else {
            clientsData.push({ cedula, name });
        }
        localStorage.setItem('clientsData', JSON.stringify(clientsData));
    }

    if (!savedClientNames.includes(name)) {
        savedClientNames.push(name);
        localStorage.setItem('clientNames', JSON.stringify(savedClientNames));
    }
}

function findClientByCedula(cedula) {
    let found = clientsData.find(c => c.cedula === cedula);
    if (!found) {
        found = manualClients.find(c => c.cedula === cedula);
    }
    return found;
}

// === LÓGICA DEL MODAL INICIAL ===
initialCedula.addEventListener('input', (e) => {
    let val = e.target.value.trim().toUpperCase();

    // Si empieza por número, sugerir V
    if (val.length > 0 && /^[0-9]/.test(val)) {
        // No forzamos aquí para no molestar al escribir, 
        // pero buscamos con y sin V
    }

    if (val) {
        const found = findClientByCedula(val) || findClientByCedula('V' + val);
        if (found) {
            initialName.value = found.name;
            initialName.classList.add('bg-red-900', 'border-red-600', 'text-white');
            // No quitamos el color inmediatamente para que se vea que cargó
        }
    }
});

startAppButton.addEventListener('click', () => {
    const name = initialName.value.trim();
    let cedula = initialCedula.value.trim().toUpperCase();

    if (cedula.length > 0 && /^[0-9]/.test(cedula)) {
        cedula = 'V' + cedula;
    }

    if (!name) {
        initialName.classList.add('border-red-500');
        initialName.placeholder = "¡EL NOMBRE ES OBLIGATORIO!";
        setTimeout(() => initialName.classList.remove('border-red-500'), 2000);
        return;
    }

    saveClientData(cedula, name);
    currentClientCedula = cedula;
    clientNameInput.value = name;
    initialSetupModal.style.display = 'none';

    // Aplicar fondo al cuerpo después de entrar
    document.body.classList.add('app-bg');

    searchInput.focus();
});

initialCedula.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (initialName.value.trim() !== "") {
            startAppButton.click();
        } else {
            initialName.focus();
        }
    }
});

initialName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        startAppButton.click();
    }
});

// === AUTOCOMPLETADO DE CLIENTES ===
let selectedSuggestionIndex = -1;

function saveClientName(name) {
    name = name.trim();
    if (name && !savedClientNames.includes(name)) {
        savedClientNames.push(name);
        localStorage.setItem('clientNames', JSON.stringify(savedClientNames));
    }
}

function updateSuggestionHighlight(items) {
    items.forEach((item, index) => {
        if (index === selectedSuggestionIndex) {
            item.classList.add('suggestion-selected');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('suggestion-selected');
        }
    });
}

clientNameInput.addEventListener('input', function () {
    const value = this.value.toLowerCase();
    suggestionsList.innerHTML = '';
    selectedSuggestionIndex = -1;

    if (!value) {
        suggestionsList.classList.add('hidden');
        return;
    }

    const manualNames = manualClients.map(c => c.name);
    const allNamesSource = [...new Set([...savedClientNames, ...manualNames])];
    const matches = allNamesSource.filter(name => name.toLowerCase().includes(value));

    if (matches.length > 0) {
        matches.forEach((name) => {
            const li = document.createElement('li');
            li.className = 'px-4 py-2 hover:bg-gray-600 cursor-pointer text-gray-200 border-b border-gray-600 last:border-0';
            li.textContent = name;
            li.addEventListener('click', () => {
                selectSuggestion(name);
            });
            suggestionsList.appendChild(li);
        });
        suggestionsList.classList.remove('hidden');
    } else {
        suggestionsList.classList.add('hidden');
    }
});

function selectSuggestion(name) {
    clientNameInput.value = name;
    suggestionsList.classList.add('hidden');
    searchInput.focus();
}

clientNameInput.addEventListener('keydown', function (e) {
    const items = suggestionsList.querySelectorAll('li');

    if (suggestionsList.classList.contains('hidden') || items.length === 0) {
        if (e.key === 'Enter') {
            e.preventDefault();
            suggestionsList.classList.add('hidden');
            searchInput.focus();
        }
        return;
    }

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedSuggestionIndex = (selectedSuggestionIndex + 1) % items.length;
        updateSuggestionHighlight(items);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (selectedSuggestionIndex === -1) selectedSuggestionIndex = items.length;
        selectedSuggestionIndex = (selectedSuggestionIndex - 1 + items.length) % items.length;
        updateSuggestionHighlight(items);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedSuggestionIndex > -1) {
            items[selectedSuggestionIndex].click();
        } else {
            suggestionsList.classList.add('hidden');
            searchInput.focus();
        }
    } else if (e.key === 'Escape') {
        suggestionsList.classList.add('hidden');
    }
});

document.addEventListener('click', (e) => {
    if (!clientNameInput.contains(e.target) && !suggestionsList.contains(e.target)) {
        suggestionsList.classList.add('hidden');
    }
});

function closeConfirmationModal() {
    confirmationModal.style.display = 'none';
    searchInput.focus();
}

function renderProducts(list, selectedIndex) {
    productList.innerHTML = '';

    if (list.length === 0 && searchInput.value.trim().length > 0) {
        productList.innerHTML = '<p class=\"text-center text-gray-400 italic\">No se encontraron productos.</p>';
        return;
    }
    if (searchInput.value.trim().length === 0) {
        productList.innerHTML = '<p class=\"text-center text-gray-400 italic font-bold\">Escribe para buscar un producto...</p>';
        return;
    }

    const fragment = document.createDocumentFragment();

    list.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'flex justify-between items-center bg-gray-700 p-3 rounded-xl shadow-sm transition-transform duration-200 transform hover:scale-105 hover:shadow-md cursor-pointer';

        if (index === selectedIndex) {
            productElement.classList.add('highlighted');
        }

        const productInfoContainer = document.createElement('div');
        productInfoContainer.className = 'flex items-center space-x-2';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-gray-200 text-sm font-medium capitalize truncate';
        nameSpan.textContent = product.name.toLowerCase();

        const unitSpan = document.createElement('span');
        unitSpan.className = 'text-xs text-gray-400 font-semibold';
        unitSpan.textContent = `(${product.unit})`;

        productInfoContainer.appendChild(nameSpan);
        productInfoContainer.appendChild(unitSpan);

        if (product.price && product.price > 0) {
            const priceSpan = document.createElement('span');
            priceSpan.className = 'text-sm font-bold text-green-400';
            priceSpan.textContent = `${product.price.toFixed(2)} Bs.`;
            productElement.appendChild(priceSpan);
        }

        productElement.insertBefore(productInfoContainer, productElement.firstChild);

        productElement.addEventListener('click', () => {
            openCalculator(product);
        });

        fragment.appendChild(productElement);
    });

    productList.appendChild(fragment);

    if (selectedIndex !== -1) {
        const highlightedElement = productList.children[selectedIndex];
        if (highlightedElement) {
            highlightedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

function renderAddedProducts() {
    addedProductsList.innerHTML = '<h3 class=\"text-lg font-semibold text-gray-300\">Productos Agregados:</h3>';

    if (addedProducts.length === 0) {
        addedProductsList.innerHTML += '<p class=\"text-center text-gray-400 italic font-bold\">No hay productos agregados.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();

    addedProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'flex justify-between items-center bg-red-950 bg-opacity-40 p-3 rounded-xl border border-red-900/30 shadow-sm transition-all hover:bg-opacity-60';

        const productInfoContainer = document.createElement('div');
        productInfoContainer.className = 'flex flex-col items-start';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-red-200 text-sm font-black uppercase italic truncate';
        nameSpan.textContent = product.name.toLowerCase();

        productInfoContainer.appendChild(nameSpan);

        const quantitySpan = document.createElement('span');
        quantitySpan.className = 'text-red-500 text-sm font-black';
        if (product.quantity) {
            quantitySpan.textContent = `(${product.quantity} ${product.unit})`;
        }

        const actionContainer = document.createElement('div');
        actionContainer.className = 'flex items-center space-x-2';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button text-red-400 hover:text-red-500';
        deleteButton.innerHTML = `
            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5\" viewBox=\"0 0 20 20\" fill=\"currentColor\">
                <path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1-1.414-1.414L10 8.586 8.707 7.293z\" clip-rule=\"evenodd\" />
            </svg>
        `;
        deleteButton.addEventListener('click', () => {
            removeProduct(index);
        });

        actionContainer.appendChild(quantitySpan);
        actionContainer.appendChild(deleteButton);

        productElement.appendChild(productInfoContainer);
        productElement.appendChild(actionContainer);
        fragment.appendChild(productElement);
    });

    addedProductsList.appendChild(fragment);
}

function addProduct(product) {
    addedProducts.push(product);
    saveAddedProducts(); // Persistir localmente
    renderAddedProducts();
    searchInput.value = '';
    filterProductsAndRender('');
}

function removeProduct(index) {
    addedProducts.splice(index, 1);
    saveAddedProducts(); // Persistir localmente
    renderAddedProducts();
}

// === PERSISTENCIA LOCAL DE PRODUCTOS ===
function saveAddedProducts() {
    localStorage.setItem('addedProducts', JSON.stringify(addedProducts));
}

function loadAddedProducts() {
    const saved = localStorage.getItem('addedProducts');
    if (saved) {
        addedProducts = JSON.parse(saved);
        renderAddedProducts();
    }
}

function openUnitModal() {
    const numericValue = parseFloat(calculatorInput.value);
    if (!isNaN(numericValue) && numericValue > 0) {
        currentNumericValue = numericValue;
        unitModalProduct.textContent = `Seleccionaste: ${currentProduct.name.toLowerCase()}`;
        unitModal.style.display = 'flex';
        selectedUnitIndex = 0;
        highlightSelectedUnit();
        document.addEventListener('keydown', handleUnitKeydown);
    }
}

function closeUnitModalFunction() {
    unitModal.style.display = 'none';
    document.removeEventListener('keydown', handleUnitKeydown);
}

function highlightSelectedUnit() {
    unitOptions.forEach((button, index) => {
        button.classList.remove('unit-option-highlighted');
        if (index === selectedUnitIndex) {
            button.classList.add('unit-option-highlighted');
        }
    });
}

function handleUnitKeydown(e) {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedUnitIndex = (selectedUnitIndex + 1) % unitOptions.length;
        highlightSelectedUnit();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedUnitIndex = (selectedUnitIndex - 1 + unitOptions.length) % unitOptions.length;
        highlightSelectedUnit();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        unitOptions[selectedUnitIndex].click();
    }
}

selectKgButton.addEventListener('click', () => handleUnitSelection('KG'));
selectGramosButton.addEventListener('click', () => handleUnitSelection('Gramos'));
selectBsButton.addEventListener('click', () => handleUnitSelection('Bs.'));
selectLonjaButton.addEventListener('click', () => handleUnitSelection('Und/Lonjas'));
closeUnitModal.addEventListener('click', closeUnitModalFunction);

function handleUnitSelection(unit) {
    currentUnit = unit;
    closeUnitModalFunction();
    let quantity = currentNumericValue;
    const productWithQuantity = { ...currentProduct, quantity: quantity, unit: unit };
    addProduct(productWithQuantity);
    searchInput.focus();
}

function openCalculator(product) {
    currentProduct = product;
    currentNumericValue = 0;
    calculatorTitle.textContent = product.name;
    calculatorInput.value = '1';
    calculatorModal.style.display = 'flex';
    calculatorInput.focus();
    calculatorInput.select();
}

function closeCalculator() {
    calculatorModal.style.display = 'none';
}

function acceptQuantity() {
    const numericValue = parseFloat(calculatorInput.value);
    if (isNaN(numericValue) || numericValue <= 0) return;

    if (currentProduct.unit === 'UND') {
        const productWithQuantity = {
            ...currentProduct,
            quantity: numericValue,
            unit: 'UND'
        };
        addProduct(productWithQuantity);
        closeCalculator();
        searchInput.focus();
    } else {
        closeCalculator();
        openUnitModal();
    }
}

function filterProductsAndRender(searchTerm) {
    const numericSearch = parseInt(searchTerm);
    if (!isNaN(numericSearch)) {
        if (numericSearch > 0 && numericSearch <= products.length) {
            filteredProducts = [products[numericSearch - 1]];
            selectedProductIndex = 0;
        } else {
            filteredProducts = [];
            selectedProductIndex = -1;
        }
    } else {
        filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        selectedProductIndex = -1;
    }

    if (searchTerm.length > 0) {
        renderProducts(filteredProducts, selectedProductIndex);
    } else {
        productList.innerHTML = '<p class=\"text-center text-gray-400 italic font-bold\">Escribe para buscar un producto...</p>';
        filteredProducts = [];
        selectedProductIndex = -1;
    }
}

function handleKeyboardInput(e) {
    const key = e.key;
    if (document.activeElement === searchInput && calculatorModal.style.display !== 'flex') {
        if (e.key === 'ArrowDown' && filteredProducts.length > 0) {
            e.preventDefault();
            selectedProductIndex = (selectedProductIndex + 1) % filteredProducts.length;
            renderProducts(filteredProducts, selectedProductIndex);
        } else if (e.key === 'ArrowUp' && filteredProducts.length > 0) {
            e.preventDefault();
            selectedProductIndex = (selectedProductIndex - 1 + filteredProducts.length) % filteredProducts.length;
            renderProducts(filteredProducts, selectedProductIndex);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedProductIndex >= 0 && filteredProducts.length > 0) {
                const product = filteredProducts[selectedProductIndex];
                openCalculator(product);
            } else if (filteredProducts.length === 0 && searchInput.value.trim() !== '') {
                searchInput.value = '';
                filterProductsAndRender('');
            }
        }
    } else if (calculatorModal.style.display === 'flex') {
        if (key === 'Enter') {
            e.preventDefault();
            acceptQuantity();
        } else if (key === 'Escape') {
            e.preventDefault();
            closeCalculator();
        } else if (key === 'Backspace' || key === 'Delete') {
            e.preventDefault();
            calculatorInput.value = calculatorInput.value.slice(0, -1);
        }
    }
}
document.addEventListener('keydown', handleKeyboardInput);

calculatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        let currentInputValue = calculatorInput.value;
        if (value === 'C') {
            currentInputValue = '';
        } else if (value === '.') {
            if (!currentInputValue.includes('.')) currentInputValue += '.';
        } else {
            currentInputValue += value;
        }
        calculatorInput.value = currentInputValue;
        calculatorInput.focus();
        calculatorInput.selectionStart = calculatorInput.selectionEnd = calculatorInput.value.length;
    });
});

acceptButton.addEventListener('click', acceptQuantity);
closeCalculatorButton.addEventListener('click', closeCalculator);

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    filterProductsAndRender(searchTerm);
});

closeQrModal.addEventListener('click', () => {
    qrModal.style.display = 'none';
});

function preparePrint() {
    printProductsList.innerHTML = '';
    let printCount = parseInt(localStorage.getItem('printCount')) || 0;
    const clientName = clientNameInput.value ? `${clientNameInput.value}` : '';
    printClientName.textContent = `${clientName} (#${printCount})`;

    const barcodeContainer = document.getElementById('barcodeContainer');
    if (currentClientCedula) {
        barcodeContainer.classList.remove('hidden');
        JsBarcode("#barcode", currentClientCedula, {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 40,
            displayValue: true,
            fontSize: 14,
            marginTop: 10,
            marginBottom: 10
        });
    } else {
        barcodeContainer.classList.add('hidden');
    }

    addedProducts.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.className = 'flex justify-between items-center print-list-item print-content';
        const nameSpan = document.createElement('div');
        nameSpan.className = 'text-gray-900 text-sm font-bold capitalize truncate';
        nameSpan.textContent = product.name.toLowerCase();
        const quantitySpan = document.createElement('div');
        quantitySpan.className = 'text-gray-900 text-sm';
        if (product.quantity) {
            const quantity = (product.unit === 'KG' || product.unit === 'Gramos') ? parseFloat(product.quantity) : product.quantity;
            quantitySpan.textContent = `${quantity} ${product.unit}`;
        }
        productElement.appendChild(nameSpan);
        productElement.appendChild(quantitySpan);
        printProductsList.appendChild(productElement);
    });
}

function printProducts() {
    if (clientNameInput.value) saveClientName(clientNameInput.value);
    let printCount = parseInt(localStorage.getItem('printCount')) || 0;
    printCount++;
    localStorage.setItem('printCount', printCount);
    preparePrint();
    window.print();
    setTimeout(() => {
        searchInput.value = '';
        addedProducts = [];
        saveAddedProducts(); // Limpiar persistencia después de facturar
        renderAddedProducts();
        clientNameInput.value = '';
        currentClientCedula = '';
        initialCedula.value = '';
        initialName.value = '';
        initialSetupModal.style.display = 'flex';
        document.body.classList.remove('app-bg'); // Quitar fondo al reiniciar
        setTimeout(() => initialCedula.focus(), 100);
    }, 100);
}

function toggleMenu() {
    sideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

menuPrint.addEventListener('click', () => {
    if (addedProducts.length > 0) printProducts();
    toggleMenu();
});

menuQr.addEventListener('click', () => {
    generateQrCode();
    toggleMenu();
});

menuScan.addEventListener('click', () => {
    scannerInputContainer.classList.toggle('hidden');
    if (!scannerInputContainer.classList.contains('hidden')) {
        scannerInput.focus();
    }
    toggleMenu();
});

const menuPrices = document.getElementById('menuPrices');

menuPrices.addEventListener('click', () => {
    renderPriceList();
    priceModal.style.display = 'flex';
    priceSearchInput.focus();
    toggleMenu();
});

closeOptionsModal.addEventListener('click', () => {
    optionsModal.style.display = 'none';
});

resetCounterButton.addEventListener('click', () => {
    resetConfirmModal.style.display = 'flex';
});

confirmResetButton.addEventListener('click', () => {
    localStorage.setItem('printCount', '0');
    updatePrintCountDisplay();
    resetConfirmModal.style.display = 'none';
});

cancelResetButton.addEventListener('click', () => {
    resetConfirmModal.style.display = 'none';
});

function generateQrCode() {
    if (addedProducts.length === 0) return;
    qrcodeContainer.innerHTML = '';
    let qrText = `Cliente: ${clientNameInput.value || 'N/A'}\n\n`;
    addedProducts.forEach(product => {
        const formattedQuantity = Number.isInteger(product.quantity) ? product.quantity.toString() : product.quantity.toFixed(3);
        qrText += `${product.name} - ${formattedQuantity} ${product.unit}\n`;
    });
    new QRCode(qrcodeContainer, {
        text: qrText,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    qrModal.style.display = 'flex';
}

generateQrButton.addEventListener('click', generateQrCode);

editCounterButton.addEventListener('click', () => {
    restoreInput.value = localStorage.getItem('printCount') || 0;
    restoreModal.style.display = 'flex';
    restoreInput.select();
});

cancelRestoreButton.addEventListener('click', () => {
    restoreModal.style.display = 'none';
});

confirmRestoreButton.addEventListener('click', () => {
    const newValue = parseInt(restoreInput.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
        localStorage.setItem('printCount', newValue.toString());
        updatePrintCountDisplay();
        restoreModal.style.display = 'none';
    } else {
        restoreInput.classList.add('border-red-500', 'border-2');
        setTimeout(() => {
            restoreInput.classList.remove('border-red-500', 'border-2');
        }, 1000);
    }
});

confirmPrintButton.addEventListener('click', () => {
    printProducts();
    closeConfirmationModal();
});

cancelPrintButton.addEventListener('click', closeConfirmationModal);

document.addEventListener('keydown', (e) => {
    // F9 para imprimir directamente
    if (e.key === 'F12' || e.keyCode === 120 || e.key === 'F9') {
        e.preventDefault();
        if (addedProducts.length > 0) {
            printProducts();
        } else {
            // Si no hay productos, quizás abrir el menú o avisar
            alert("No hay productos para imprimir.");
        }
    }
    if (confirmationModal.style.display === 'flex') {
        if (e.key === 'Enter') {
            e.preventDefault();
            confirmPrintButton.click();
        } else if (e.key === 'Escape' || e.key === 'Esc') {
            e.preventDefault();
            cancelPrintButton.click();
        }
    } else if (restoreModal.style.display === 'flex') {
        if (e.key === 'Enter') {
            e.preventDefault();
            confirmRestoreButton.click();
        } else if (e.key === 'Escape' || e.key === 'Esc') {
            e.preventDefault();
            cancelRestoreButton.click();
        }
    } else if (resetConfirmModal.style.display === 'flex') {
        if (e.key === 'Enter') {
            e.preventDefault();
            confirmResetButton.click();
        } else if (e.key === 'Escape' || e.key === 'Esc') {
            e.preventDefault();
            cancelResetButton.click();
        }
    }
});

function loadPrices() {
    const storedPrices = localStorage.getItem('productPrices');
    if (storedPrices) {
        productPrices = JSON.parse(storedPrices);
    }
    products = products.map(p => ({
        ...p,
        price: productPrices[p.name] || 0
    }));
}

function renderPriceList(filter = '') {
    priceListContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(product => {
        const item = document.createElement('div');
        item.className = 'flex justify-between items-center bg-gray-700 p-2 rounded-lg';
        const label = document.createElement('label');
        label.textContent = product.name.toLowerCase();
        label.className = 'text-sm text-gray-300 capitalize flex-grow';
        label.htmlFor = `price-${product.name}`;
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `price-${product.name}`;
        input.className = 'bg-gray-900 text-white rounded-md p-1 w-28 text-right focus:outline-none focus:ring-2 focus:ring-indigo-500';
        input.placeholder = '0.00';
        input.dataset.name = product.name;
        input.value = product.price > 0 ? product.price : '';
        input.step = "0.01";
        item.appendChild(label);
        item.appendChild(input);
        fragment.appendChild(item);
    });
    priceListContainer.appendChild(fragment);
}

function savePrices() {
    const priceInputs = document.querySelectorAll('#priceListContainer input');
    priceInputs.forEach(input => {
        const productName = input.dataset.name;
        const priceValue = parseFloat(input.value);
        if (!isNaN(priceValue) && priceValue > 0) {
            productPrices[productName] = priceValue;
        } else {
            delete productPrices[productName];
        }
    });
    localStorage.setItem('productPrices', JSON.stringify(productPrices));
    loadPrices();
    priceModal.style.display = 'none';
}

managePricesButton.addEventListener('click', () => {
    renderPriceList();
    priceModal.style.display = 'flex';
    priceSearchInput.focus();
});

closePriceModal.addEventListener('click', () => {
    priceModal.style.display = 'none';
});

savePricesButton.addEventListener('click', savePrices);

priceSearchInput.addEventListener('input', (e) => {
    renderPriceList(e.target.value);
});

window.onload = () => {
    loadPrices();
    loadAddedProducts(); // Cargar productos persistidos
    renderAddedProducts();

    // Si ya hay nombre cargado, podríamos saltar el modal, pero el usuario pidió que aparezca después de meter los datos.
    // Sin embargo, si refresca con datos, el modal vuelve a aparecer.

    productList.innerHTML = '<p class="text-center text-gray-400 italic font-bold">Escribe para buscar un producto...</p>';
    setTimeout(() => {
        document.getElementById('initialCedula').focus();
    }, 100);
};
