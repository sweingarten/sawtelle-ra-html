// Placeholder petition variants. Replace each variant with approved copy before launch.
const district = document.getElementById('district');
const audience = document.getElementById('audience');
const version = document.getElementById('petition-version');
const letter = document.getElementById('letter');
function updatePetition() {
    letter.replaceChildren();
    const selected = district.value && audience.value;
    version.textContent = selected
        ? `Your petition: CD ${district.value} · ${audience.selectedOptions[0].text} version`
        : 'Select both options to load your petition.';
    const paragraph = text => {
        const p = document.createElement('p');
        p.textContent = text;
        letter.append(p);
    };
    if (!selected) {
        paragraph('Your petition letter will appear here once you select your district and petition version.');
        return;
    }
    paragraph(`To the Council District ${district.value} office,`);
    paragraph(`As a ${audience.value} in Council District ${district.value}, I support this petition.`);
    paragraph(audience.value === 'tenant'
        ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    paragraph('Sincerely,');
}
district.addEventListener('change', updatePetition);
audience.addEventListener('change', updatePetition);
document.getElementById('petition-form').addEventListener('submit', event => {
    event.preventDefault();
    // Preview navigation only. Personal fields are never transmitted or persisted.
    window.location.href = 'confirmation.html';
});
updatePetition();
