import Accordion from "./Accordion";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import Button from "../../theme/button/Button";
import { questions } from "../../data/Data";

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-title">
        <SmsOutlinedIcon sx={{ color: "#F27219" }} />
        <h1>FAQ</h1>
      </div>
      <div className="faq">
        <div className="faq-left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          {questions.map((question) => {
            return <Accordion key={question.id} question={question} />;
          })}
        </div>

        <div className="section">
          <div className="row">
            <img src="/faq.png" alt="faq" />
          </div>
          <div className="row">
            <div className="content">
              <h3>Still have a question?</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="inner-button">
                <Button link="/" text="Get Started" />
                <img src="/Vector.png" alt="vector" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
