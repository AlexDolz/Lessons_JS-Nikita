function makeImageButton(dom) {
  const button = makeButton(dom);
  function setActive() {
    button.setActive();
    makeUploadButton();
  }
  function setInactive() {
    button.setInactive();
  }
  return {
    dom,
    setActive,
    setInactive,
  };
}
