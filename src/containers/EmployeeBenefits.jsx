import Benefits from "../components/Benefits";
export default function EmployeeBenefits() {
    return (
        <>
            <section className="flex flex-col items-center gap-y-7 md:gap-y-10 lg:gap-y-15 mt-10 md:mt-0">
                <div className="flex flex-col justify-center items-center gap-y-3 md:gap-y-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-black"> Employee
                        <span className="font-bold"> Benefits </span></h1>

                    <p className="font-medium text-base md:text-xl text-[#1B1B1B] text-center max-w-200">  We prioritize the personal well-being of our employees and strive to foster a healthy work-life balance. </p>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20 overflow-hidden">
                    <Benefits
                        src="ico-provident-fund.png"
                        title="PROVIDENT FUND"
                        para="All of our permanent and full-time associates are eligible for the provident fund."
                    />

                    <Benefits
                        src="ico-paid-leaves.png"
                        title="PAID LEAVES"
                        para="Employees are entitled to a specific number of casual, sick, and annual leave days."
                    />

                    <Benefits
                        src="ico-life-insurance.png"
                        title="HEALTH & LIFE INSURANCE"
                        para="All full-time associates, as well as their dependent spouses and children, are covered."
                    />

                    <Benefits
                        src="ico-trainings.png"
                        title="TRAININGS"
                        para="We cover 75% of local training costs aligned with your professional interests."
                    />

                    <Benefits
                        src="ico-talent-bonus.png"
                        title="TALENT REFERRAL BONUS"
                        para="Associates receive a bonus upon the confirmation of a recommended candidate."
                    />

                    <Benefits
                        src="ico-certifications.png"
                        title="CERTIFICATIONS"
                        para="We reimburse 100% of exam fees for certifications beneficial to you and the company upon successful clearance."
                    />

                    <Benefits
                        src="ico-car.png"
                        title="CAR ALLOWANCE"
                        para="Associates receive a monthly car allowance in addition to their salaries."
                    />

                    <Benefits
                        src="ico-salary.png"
                        title="COMPETITIVE SALARY"
                        para="We offer competitive salaries along with the opportunity to earn an annual bonus."
                    />

                    <Benefits
                        src="ico-maternity.png"
                        className="lg:col-start-2"
                        title="MATERNITY & PATERNITY LEAVE"
                        para="New or soon-to-be parents are provided with a certain number of months off."
                    />

                    <Benefits
                        src="ico-steering-wheel.png"
                        className=""
                        title="TRANSPORTATION FACILITIES"
                        para="All our associates have access to office vans for their commute."
                    />
                </section>
            </section>
        </>
    );
}