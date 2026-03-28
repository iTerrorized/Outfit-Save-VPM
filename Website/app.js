const LISTING_URL = "{{ listingInfo.Url }}";

(() => {
  const vccAddRepoButton = document.getElementById('vccAddRepoButton');
  vccAddRepoButton.addEventListener('click', () => {
    window.location.assign(`vcc://vpm/addRepo?url=${encodeURIComponent(LISTING_URL)}`);
  });

  const vccUrlFieldCopy = document.getElementById('vccUrlFieldCopy');
  vccUrlFieldCopy.addEventListener('click', () => {
    const vccUrlField = document.getElementById('vccUrlField');
    navigator.clipboard.writeText(vccUrlField.value);
  });
})();
