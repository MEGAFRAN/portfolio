import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import LanguageToogle from "./LanguageToogle"

describe("<LanguageToogle />", () => {
  const originalLanguage = window.navigator.language

  afterEach(() => {
    jest.spyOn(React, "useContext").mockRestore()

    Object.defineProperty(window.navigator, "language", {
      configurable: true,
      get: () => originalLanguage,
    })
  })

  it("Should display the secondary language toggle button when clicked", () => {
    Object.defineProperty(window.navigator, "language", {
      configurable: true,
      get: () => "es-CO",
    })

    const setUserLanguageMock = jest.fn()
    const mockContextValue = {
      userLanguage: "es-CO",
      setUserLanguage: setUserLanguageMock,
    }

    jest.spyOn(React, "useContext").mockImplementation(() => mockContextValue)

    const { getByText } = render(<LanguageToogle />)
    fireEvent.click(screen.getByRole("button"))

    expect(getByText("Eng")).toBeInTheDocument()
  })

  it("Should set default language to english when the browser language is not supported", () => {
    Object.defineProperty(navigator, "language", {
      value: "fr-FR",
      writable: true,
    })
    const setUserLanguageMock = jest.fn()
    jest
      .spyOn(React, "useContext")
      .mockImplementation(() => ({ userLanguage: "fr-FR", setUserLanguage: setUserLanguageMock }))

    render(<LanguageToogle />)
    expect(setUserLanguageMock).toHaveBeenCalledWith("english")
  })
})
