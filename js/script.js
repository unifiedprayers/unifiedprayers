// Global variables
let currentPrayerSet = prayerSets[0]; // Default to Holy Spirit
let index = 0;
let preIndex = 0, preSection = 0;
let postIndex = 0, postSection = 0;
let flameStyle = 'classic';
const DEBUG_FLAME_POS = false;

const beadsPerHouse = 8;
let totalBeads = currentPrayerSet.houseInfo.length * beadsPerHouse;

const beadsGroup = document.getElementById('beads');
const prayer = document.getElementById('prayer');
const counter = document.getElementById('counter');

const cx = 300, cy = 270, r = 205;
const superSpacing = 1.15;

let beadEls; // Will be set after creating beads

// Create SVG beads
function createBeads() {
  beadsGroup.innerHTML = ''; // Clear existing
  for(let i=0; i<totalBeads; i++){
    const angle = (Math.PI*2/totalBeads)*i - Math.PI/2;
    const pulse = (i % beadsPerHouse === 0) ? superSpacing : 1;
    const x = cx + r*pulse*Math.cos(angle);
    const y = cy + r*pulse*Math.sin(angle);

    const bead = document.createElementNS('http://www.w3.org/2000/svg','circle');
    bead.setAttribute('cx', x);
    bead.setAttribute('cy', y);
    bead.setAttribute('r', (i % beadsPerHouse === 0) ? 17 : 12);
    bead.classList.add('bead');
    if(i % beadsPerHouse === 0) bead.classList.add('super');
    else bead.classList.add('small');

    beadsGroup.appendChild(bead);
  }
  beadEls = beadsGroup.querySelectorAll('.bead');
}

// Update display function
function update() {
  const sel = document.getElementById('langSelect');
  const isEn = sel && sel.value === 'en';
  const preArr = isEn ? currentPrayerSet.prePrayersEn : currentPrayerSet.prePrayers;
  const houseArr = isEn ? currentPrayerSet.houseInfoEn : currentPrayerSet.houseInfo;
  const postArr = isEn ? currentPrayerSet.postPrayersEn : currentPrayerSet.postPrayers;

  // Reset all beads
  beadEls.forEach(b => {
    b.classList.remove('active');
    b.setAttribute('stroke','');
    b.setAttribute('stroke-width','');
    b.classList.remove('fire');
  });

  // Remove previous flames
  document.querySelectorAll('.flame').forEach(a => a.remove());
  document.querySelectorAll('.debug-dot').forEach(d => d.remove());
  document.querySelectorAll('.ember').forEach(e => e.remove());

  if(index < preArr.length){
    const step = preArr[preIndex];
    if(isEn) {
      prayer.innerHTML = `<h3>${step.name}</h3><p>${step.sections[preSection]}</p>`;
      counter.textContent = `Intro ${preIndex+1} - section ${preSection+1} / ${step.sections.length}`;
    } else {
      prayer.innerHTML = `<h3>${step.name}</h3><p>${step.sections[preSection]}</p>`;
      counter.textContent = `التمهيد ${preIndex+1} - قسم ${preSection+1} / ${step.sections.length}`;
    }
  }
  else if(index >= preArr.length && index < preArr.length + totalBeads){
    const beadIndex = index - preArr.length;
    const houseIndex = Math.floor(beadIndex / beadsPerHouse);
    const withinHouse = beadIndex % beadsPerHouse;

    const activeBead = beadEls[beadIndex];
    activeBead.classList.add('active');

    // Flame indicator
    const flame = document.createElementNS('http://www.w3.org/2000/svg','g');
    flame.setAttribute('class','flame');
    const beadCx = Number(activeBead.getAttribute('cx')) || 0;
    const beadCy = Number(activeBead.getAttribute('cy')) || 0;
    const beadR = Number(activeBead.getAttribute('r')) || 8;
    const offsetY = -(beadR + 6);
    const fx = beadCx;
    const fy = beadCy + offsetY;
    const scale = Math.max(1, (beadR / 8) * 1.6);
    flame.setAttribute('transform', `translate(${fx} ${fy}) scale(${scale})`);

    if(DEBUG_FLAME_POS){
      const debugDot = document.createElementNS('http://www.w3.org/2000/svg','circle');
      debugDot.setAttribute('class','debug-dot');
      debugDot.setAttribute('cx', fx);
      debugDot.setAttribute('cy', fy);
      debugDot.setAttribute('r', 4);
      debugDot.setAttribute('fill', 'red');
      beadsGroup.appendChild(debugDot);
    }

    const outer = document.createElementNS('http://www.w3.org/2000/svg','path');
    outer.setAttribute('d','M0,-14 C6,-12 10,-6 6,2 C2,8 0,10 0,12 C0,10 -2,8 -6,2 C-10,-6 -6,-12 0,-14 Z');
    outer.setAttribute('class','flame-outer');

    const inner = document.createElementNS('http://www.w3.org/2000/svg','path');
    inner.setAttribute('d','M0,-10 C3,-8 6,-4 4,2 C2,6 0,8 0,9 C0,8 -2,6 -4,2 C-6,-4 -3,-8 0,-10 Z');
    inner.setAttribute('class','flame-inner');

    flame.appendChild(outer);
    flame.appendChild(inner);
    beadsGroup.appendChild(flame);

    activeBead.classList.add('fire');

    // Embers
    const emberCount = 6;
    for(let ei=0; ei<emberCount; ei++){
      const ex = fx + (Math.random()* (beadR*1.2) - beadR*0.6);
      const ey = fy + (Math.random()* (beadR*0.6) - beadR*0.3);
      const ember = document.createElementNS('http://www.w3.org/2000/svg','circle');
      ember.setAttribute('class','ember');
      ember.setAttribute('cx', ex);
      ember.setAttribute('cy', ey);
      ember.setAttribute('r', (Math.random()*1.8)+0.8);
      ember.style.animationDelay = `${Math.random()*400}ms`;
      beadsGroup.appendChild(ember);
    }

    if(withinHouse === 0) {
      if(isEn) prayer.innerHTML = `✦ Gift of ${houseArr[houseIndex].name}<br>${houseArr[houseIndex].super}`;
      else prayer.innerHTML = `✦ موهبة ${houseArr[houseIndex].name}<br>${houseArr[houseIndex].super}`;
    } else if(withinHouse === 7){
      if(isEn) prayer.innerHTML = 'Come, Holy Spirit, and fill the hearts of the faithful. Glory to the eternal Father, the only-begotten Son, and the living Spirit, now and forever. Amen';
      else prayer.innerHTML = 'أرسل روحك فيُخلقوا، ويتجدد وجه الأرض. المجد للآب الأزلي، والابن الوحيد الفادي، والروح الحي المعزي الآن وإلى الأبد آمين.';
    } else {
      if(isEn) prayer.textContent = 'Come, Holy Spirit, and renew the face of the earth';
      else prayer.textContent = 'أرسل روحك فيُخلقوا، ويتجدد وجه الأرض.';
    }

    if(isEn) counter.textContent = `Gift ${houseIndex+1} of ${houseArr.length} • Bead ${withinHouse+1} of ${beadsPerHouse}`;
    else counter.textContent = `موهبة ${houseIndex+1} / ${houseArr.length} • حبة ${withinHouse+1} / ${beadsPerHouse}`;
  }
  else{
    const postStep = postArr[postIndex];
    if(isEn){
      prayer.innerHTML = `<h3>${postStep.name}</h3><p>${postStep.sections[postSection]}</p>`;
      counter.textContent = `Closing ${postIndex+1} - section ${postSection+1} / ${postStep.sections.length}`;
    } else {
      prayer.innerHTML = `<h3>${postStep.name}</h3><p>${postStep.sections[postSection]}</p>`;
      counter.textContent = `الختام ${postIndex+1} - قسم ${postSection+1} / ${postStep.sections.length}`;
    }
  }
}

// Navigation functions
function next(){
  const sel = document.getElementById('langSelect');
  const isEn = sel && sel.value === 'en';
  const preArr = isEn ? currentPrayerSet.prePrayersEn : currentPrayerSet.prePrayers;
  const postArr = isEn ? currentPrayerSet.postPrayersEn : currentPrayerSet.postPrayers;

  if(index < preArr.length){
    if(preSection < preArr[preIndex].sections.length-1){
      preSection++;
    } else {
      preSection = 0;
      preIndex++;
      index++;
    }
  }
  else if(index >= preArr.length && index < preArr.length + totalBeads){
    index++;
  }
  else if(index >= preArr.length + totalBeads){
    const postStep = postArr[postIndex];
    if(postSection < postStep.sections.length-1){
      postSection++;
    } else {
      postSection = 0;
      postIndex++;
      index++;
    }
  }
  update();
}

function prev(){
  const sel = document.getElementById('langSelect');
  const isEn = sel && sel.value === 'en';
  const preArr = isEn ? currentPrayerSet.prePrayersEn : currentPrayerSet.prePrayers;
  const postArr = isEn ? currentPrayerSet.postPrayersEn : currentPrayerSet.postPrayers;

  if(index >= preArr.length + totalBeads){
    const postStep = postArr[postIndex];
    if(postSection>0){
      postSection--;
    } else {
      postIndex--;
      if(postIndex < 0){
        // Go back to last bead
        postIndex = 0;
        postSection = 0;
        index = preArr.length + totalBeads - 1;
      } else {
        postSection = postArr[postIndex].sections.length-1;
        index--;
      }
    }
  }
  else if(index >= preArr.length){
    if(index == preArr.length){
      // Going back from first bead to last pre section
      index = preArr.length - 1;
      preIndex = preArr.length - 1;
      preSection = preArr[preIndex].sections.length - 1;
    } else {
      index--;
    }
  }
  else if(index == 0 && preSection > 0){
    preSection--;
  }
  else if(index > 0){
    if(preSection>0) preSection--;
    else{
      preIndex--;
      preSection = preArr[preIndex].sections.length-1;
      index--;
    }
  }
  update();
}

// Event listeners
document.querySelector('.zone.right').onclick = next;
document.querySelector('.zone.left').onclick = prev;
document.querySelector('.nav.right').onclick = next;
document.querySelector('.nav.left').onclick = prev;

window.addEventListener('keydown', e=>{
  if(e.key==='ArrowRight') next();
  if(e.key==='ArrowLeft') prev();
});

// Popup functions
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

const dove = document.getElementById('dove');
dove.addEventListener('click', openPopup);

// Language and menu functions
function initUI() {
  // Language toggle
  const langDiv = document.createElement('div');
  langDiv.className = 'lang-toggle';
  langDiv.innerHTML = `
    <select id="langSelect" aria-label="Language selector">
      <option value="ar">العربية</option>
      <option value="en">English</option>
    </select>
  `;
  document.body.appendChild(langDiv);

  const select = document.getElementById('langSelect');
  select.addEventListener('change', e=> {
    // When language changes, ensure indices are within bounds for the new language arrays
    const isEn = e.target.value === 'en';
    const preArr = isEn ? currentPrayerSet.prePrayersEn : currentPrayerSet.prePrayers;
    const houseArr = isEn ? currentPrayerSet.houseInfoEn : currentPrayerSet.houseInfo;
    const postArr = isEn ? currentPrayerSet.postPrayersEn : currentPrayerSet.postPrayers;

    // Clamp preIndex and preSection
    if (preIndex >= preArr.length) {
      preIndex = 0;
      preSection = 0;
    } else if (preSection >= preArr[preIndex].sections.length) {
      preSection = 0;
    }

    // For post prayers, clamp postIndex and postSection
    if (postIndex >= postArr.length) {
      postIndex = 0;
      postSection = 0;
    } else if (postSection >= postArr[postIndex].sections.length) {
      postSection = 0;
    }

    update();
  });

  // Burger menu
  const burgerBtn = document.createElement('button');
  burgerBtn.className = 'burger-menu';
  burgerBtn.innerHTML = '☰';
  burgerBtn.onclick = toggleMenu;
  document.body.appendChild(burgerBtn);

  const menuPanel = document.createElement('div');
  menuPanel.className = 'menu-panel';
  menuPanel.id = 'menuPanel';
  menuPanel.innerHTML = `
    <h2>الصلوات</h2>
    <ul>
      ${prayerSets.map(set => `<li><a href="#" onclick="switchPrayer('${set.id}')">${set.title}</a></li>`).join('')}
    </ul>
  `;
  document.body.appendChild(menuPanel);

  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  overlay.id = 'menuOverlay';
  overlay.onclick = toggleMenu;
  document.body.appendChild(overlay);
}

function toggleMenu() {
  const panel = document.getElementById('menuPanel');
  const overlay = document.getElementById('menuOverlay');
  const isOpen = panel.classList.contains('open');
  if(isOpen) {
    panel.classList.remove('open');
    overlay.classList.remove('open');
  } else {
    panel.classList.add('open');
    overlay.classList.add('open');
  }
}

function switchPrayer(setId) {
  const newSet = prayerSets.find(s => s.id === setId);
  if(newSet) {
    currentPrayerSet = newSet;
    // Reset indices
    index = 0;
    preIndex = 0;
    preSection = 0;
    postIndex = 0;
    postSection = 0;
    // Recreate beads if different count
    const newTotal = newSet.houseInfo.length * beadsPerHouse;
    if(newTotal !== totalBeads) {
      totalBeads = newTotal;
      createBeads();
    }
    update();
    toggleMenu(); // Close menu
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  createBeads();
  initUI();
  update();
});// Initialize
