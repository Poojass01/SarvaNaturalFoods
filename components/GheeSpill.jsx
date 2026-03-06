export default function GheeSpill() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="ghee-jar shadow-2xl">
        <div className="jar-neck" />
        <div className="jar-body">
          <div className="ghee-wave" />
          <div className="ghee-highlight" />
        </div>
      </div>
      <div className="spill-trail">
        <span className="spill drop-1" />
        <span className="spill drop-2" />
        <span className="spill drop-3" />
      </div>
      <style jsx>{`
        .ghee-jar {
          width: 220px;
          height: 320px;
          border-radius: 110px 110px 90px 90px / 50px 50px 120px 120px;
          background: linear-gradient(160deg, #fff3c2 0%, #ffd166 40%, #f4b124 100%);
          position: relative;
          overflow: hidden;
          border: 6px solid rgba(255, 255, 255, 0.7);
          background-clip: padding-box;
          animation: glow 6s ease-in-out infinite;
        }

        .jar-neck {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 160px;
          height: 30px;
          background: rgba(255, 255, 255, 0.85);
          border-radius: 40px;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.6);
        }

        .jar-body {
          position: absolute;
          inset: 40px 20px 20px;
          background: linear-gradient(160deg, #fef9e0 0%, #ffe18c 35%, #f6b10c 100%);
          border-radius: 80px 80px 70px 70px;
          overflow: hidden;
        }

        .ghee-wave {
          position: absolute;
          top: 45%;
          left: 0;
          width: 200%;
          height: 80%;
          background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.7), transparent 60%),
            linear-gradient(180deg, #ffd978 0%, #f7ad0b 70%);
          border-radius: 50%;
          animation: slosh 6s ease-in-out infinite;
        }

        .ghee-highlight {
          position: absolute;
          top: 15%;
          left: 12%;
          width: 35%;
          height: 60%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.7), transparent);
          border-radius: 40px;
          filter: blur(1px);
        }

        .spill-trail {
          position: relative;
          margin-top: 24px;
          width: 220px;
          height: 80px;
        }

        .spill {
          position: absolute;
          width: 30px;
          height: 30px;
          background: radial-gradient(circle at 30% 30%, #fff2b3, #f7b20a);
          border-radius: 50% 50% 60% 60%;
          opacity: 0.9;
          animation: drip 4s ease-in-out infinite;
        }

        .drop-1 {
          left: 30px;
          animation-delay: 0s;
        }

        .drop-2 {
          left: 90px;
          animation-delay: 0.7s;
        }

        .drop-3 {
          left: 150px;
          animation-delay: 1.4s;
        }

        @keyframes slosh {
          0% {
            transform: translate(-20%, -5%) rotate(0deg);
          }
          50% {
            transform: translate(-10%, 5%) rotate(3deg);
          }
          100% {
            transform: translate(-20%, -5%) rotate(0deg);
          }
        }

        @keyframes drip {
          0% {
            transform: translateY(-10px) scaleY(0.7);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          70% {
            transform: translateY(25px) scaleY(1.2);
          }
          100% {
            transform: translateY(40px) scale(0.6);
            opacity: 0;
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 20px 50px rgba(247, 177, 12, 0.3);
          }
          50% {
            box-shadow: 0 25px 60px rgba(224, 138, 0, 0.45);
          }
          100% {
            box-shadow: 0 20px 50px rgba(247, 177, 12, 0.3);
          }
        }
      `}</style>
    </div>
  )
}
