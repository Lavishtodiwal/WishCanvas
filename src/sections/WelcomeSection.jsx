import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ArrowDown } from "lucide-react";
import styled from "styled-components";

export default function WelcomeScreen({ onStart }) {
  return (
    <Wrapper>
      <motion.div
        className="card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="card2">

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 6, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="icon"
          >
            <Sparkles size={34} />
          </motion.div>

          <h1>
            Welcome...
          </h1>

          <div className="content">

            <p>Hi, 👋</p>

            <p>
              If you're reading this...
            </p>

            <p className="highlight">
              Congratulations 🎉
            </p>

            <p>
              You've just unlocked one of the most
              special projects I've ever made.
            </p>

            <p>
              This isn't just another website.
            </p>

            <p>
              Every animation,
              <br />
              every colour,
              <br />
              every little detail,
            </p>

            <p>
              was chosen while thinking about
            </p>

            <p className="you">
              You. ❤️
            </p>

            <p>
              So...
              <br />
              Sit back,
              <br />
              Smile a little,
              <br />
              and enjoy your birthday surprise.
            </p>

          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={onStart}
          >
            Let's Go
            <ArrowDown size={18} />
          </motion.button>

        </div>
      </motion.div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:24px;
  background:#07070d;

  .card{
    width:360px;
    background-image:linear-gradient(
      163deg,
      #ff4fae,
      #8b5cf6,
      #3b82f6
    );
    border-radius:24px;
    padding:2px;
    transition:.4s;
  }

  .card:hover{
    box-shadow:0 0 45px rgba(255,79,174,.35);
  }

  .card2{
    background:#111114;
    border-radius:22px;
    padding:28px 24px;
    transition:.3s;
    text-align:center;
  }

  .card:hover .card2{
    transform:scale(.985);
  }

  .icon{
    width:70px;
    height:70px;
    margin:auto;
    border-radius:50%;
    background:rgba(255,255,255,.05);
    border:1px solid rgba(255,255,255,.1);
    display:flex;
    justify-content:center;
    align-items:center;
    color:#ff71b8;
    margin-bottom:20px;
  }

  h1{
    color:white;
    font-size:2rem;
    margin-bottom:20px;
    font-weight:700;
  }

  .content{
    color:#cfcfcf;
    line-height:1.8;
    font-size:15px;
  }

  .content p{
    margin-bottom:14px;
  }

  .highlight{
    color:#ff71b8;
    font-weight:700;
    font-size:18px;
  }

  .you{
    color:white;
    font-size:22px;
    font-weight:700;
  }

  button{
    margin-top:30px;
    width:100%;
    height:52px;
    border:none;
    border-radius:999px;
    background:linear-gradient(
      135deg,
      #ff4fae,
      #8b5cf6
    );
    color:white;
    font-size:16px;
    font-weight:600;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    transition:.3s;
  }

  button:hover{
    transform:translateY(-2px);
  }

  @media(max-width:420px){

    .card{
      width:100%;
    }

    .card2{
      padding:24px 20px;
    }

  }
`;