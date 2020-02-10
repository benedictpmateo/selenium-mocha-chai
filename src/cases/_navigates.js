export default function navigates (build, msg = "Navigates", path = "") {
  it(msg, () => {
    return build
      .navigate()
      .to(path)
  })
}