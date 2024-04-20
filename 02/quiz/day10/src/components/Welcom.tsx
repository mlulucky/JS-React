const Welcome = ({ name, isMember }: { name: string; isMember: boolean }) => {
  return (
    <div>
      {isMember ? (
        <h1>{name}님 다시 오셨군요</h1>
      ) : (
        <h1>{name}님 가입하시겠어요 ?</h1>
      )}
    </div>
  );
};

export default Welcome;
