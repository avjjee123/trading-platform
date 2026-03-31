import React from "react";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom"; 
import { MemoryRouter } from "react-router-dom"; 
import Hero from "../landing_page/home/Hero";

jest.mock("react-cookie", () => ({
  useCookies: () => [{}, jest.fn(), jest.fn()]
}));

describe("Hero Component",()=>{
    test("renders hero image",()=>{
        render( <MemoryRouter>
        <Hero />
      </MemoryRouter>);
        const heroImage = screen.getByAltText("hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/kite.png");
    });
    test("renders signup button",()=>{
        render( <MemoryRouter>
        <Hero />
      </MemoryRouter>);
        const signupButton=screen.getByRole("button");
        expect(signupButton).toBeInTheDocument();
        // expect(signupButton).toHaveClass("btn-primary");
    }); 
}); 