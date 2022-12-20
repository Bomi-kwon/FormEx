function FormEx() {
  const onSubmit = (e) => {
    e.preventDefault();
    //기본으로 내장된 반응을 제거해준다
    const form = e.target;
    //굳이 변수로 안 둬도 되지만 그러면 e.target을 계속 써야함

    form.name.value = form.name.value.trim();
    //불필요한 스페이스바 알아서 지워줌
    if (form.name.value.length == 0) {
      alert("이름을 입력해주세요.");
      //이름란에 아무것도 안 쓰면 쓰라고 말해주는 기능
      form.name.focus();
      //alert에서 확인 누르면 다시 이름 적는 란으로 커서 옮겨주는 기능
      return;
    }

    form.age.value = form.age.value.trim();
    if (form.age.value.length == 0) {
      alert("나이를 입력해주세요.");
      form.age.focus();
      return;
    }
    // 나이도 똑같이 해줬음.

    alert(`이름 : ${form.name.value}, 나이 : ${form.age.value}`);
    //팝업창으로 내가 입력한 이름과 나이 알려주기

    form.name.value = "";
    form.age.value = "";
    //alert 해주고 난 뒤 다시 이름과 나이 초기화

    form.name.focus();
    //커서는 다시 이름 입력란으로
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          placeholder="이름을 입력해주세요."
          autoComplete="off"
          //자동완성 끄기 기능
        />
        <br />
        <input name="age" type="number" placeholder="나이를 입력해주세요." />
        <br />
        <input type="submit" value="전송" />
      </form>
    </>
  );
}

export default FormEx;
