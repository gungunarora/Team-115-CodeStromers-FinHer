import React from "react";
import "./AboutUs.css"; // Importing a separate CSS file for styling
import stockImage from "../assets/money-1.png"; // Add appropriate image paths
import financeImage from "../assets/money-2.png";
import incomeImage from "../assets/money-3.png";
import loanImage from "../assets/money-4.png";
import mutualFundsImage from "../assets/money-1.png";
import budgetImage from "../assets/money-2.png";


const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>Welcome to Your Financial Journey</h1>

      {/* Stock Market Finance Section */}
      <div className="about-section even">
        <div className="text-container">
          <h2>What is Stock Market Finance?</h2>
          <p>
            The stock market is a system where investors buy and sell shares of
            companies, representing partial ownership. It's a place where
            companies can raise capital by selling shares, and investors can
            potentially earn returns if the companies perform well.
          </p>
          <p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3UF0ymVdYLA?si=qJyF7y5oa9A7yaMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
        <div className="image-container">
          <img src={stockImage} alt="Stock Market" />
        </div>
      </div>

      {/* Personal Finance Management Section */}
      <div className="about-section odd">
        <div className="image-container">
          <img src={financeImage} alt="Personal Finance" />
        </div>
        <div className="text-container">
          <h2>What is Personal Finance?</h2>
          <p>
            Personal finance refers to the management of an individual’s or
            household’s financial activities, such as budgeting, saving,
            investing, and planning for the future. The goal of personal finance
            is to ensure financial security and meet short-term and long-term
            financial objectives.
          </p>
          <p><iframe width="560" height="315" src="https://www.youtube.com/embed/BKTN4C0m6MY?si=JBhD9IM7sqjDUYcR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
        </div>
      </div>

      {/* Income Management Section */}
      <div className="about-section even">
        <div className="text-container">
          <h2>How to Manage Your Income?</h2>
          <p>
          Income management involves effectively organizing and using your income to achieve financial stability, meet expenses, save, and invest for the future. It’s about making the most of your earnings while minimizing unnecessary spending and prioritizing financial goals.
          </p>
          <p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-FP7IVNN4bI?si=g8ZniInSpvzpv41b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
        <div className="image-container">
          <img src={incomeImage} alt="Income Management" />
        </div>
      </div>

      {/* Loan Application Section */}
      <div className="about-section odd">
        <div className="image-container">
          <img src={loanImage} alt="Loan Application" />
        </div>
        <div className="text-container">
          <h2>How to Apply for a Loan?</h2>
          <p>A loan is money that is borrowed from a lender (such as a bank, financial institution, or individual) with the agreement to repay the borrowed amount, typically with interest, over a set period. Loans are commonly used for large purchases like buying a house, car, or paying for education.
        </p>
          <p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YMjTktGtVCk?si=PwYtdyXoLnw7QXUP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
      </div>

      {/* Mutual Funds Section */}
      <div className="about-section even">
        <div className="text-container">
          <h2>What are Mutual Funds?</h2>
          <p>
          A mutual fund is an investment vehicle that pools money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. It allows individuals to invest in a broad range of assets without having to pick and manage individual securities themselves.
          </p>
          <p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ACpQo1a_RBk?si=sv1DYsLugCoVaY-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
        <div className="image-container">
          <img src={mutualFundsImage} alt="Mutual Funds" />
        </div>
      </div>

      {/* Budget Management Section */}
      <div className="about-section odd">
        <div className="image-container">
          <img src={budgetImage} alt="Budget Management" />
        </div>
        <div className="text-container">
          <h2>How to Manage Your Budget?</h2>
          <p>
          Budget management is the process of planning, tracking, and controlling your income and expenses to ensure that you can meet your financial goals while maintaining financial stability. It involves making sure that you live within your means and saving or investing for the future.
          </p>
          <p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KgL3egde4iY?si=1Zrd1em8NhCIc8f_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;