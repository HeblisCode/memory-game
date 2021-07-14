import { useTransition, animated } from "@react-spring/web";
import "./Gameboard.css";
import Gameboard from "./Gameboard";
import Gameover from "./Gameover";

const Gameboardv2 = (props) => {
  const { win, gameover, size, sendCardId, reset } = props;

  const transitions = useTransition(!gameover, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 0,
  });

  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div
        className="animatedGameboard"
        style={{
          position: "absolute",
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        <Gameboard size={size} sendCardId={sendCardId} />
      </animated.div>
    ) : (
      <animated.div
        className="animatedGameboard"
        style={{
          position: "absolute",
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}
      >
        <Gameover reset={reset} win={win} />
      </animated.div>
    )
  );
};

export default Gameboardv2;
