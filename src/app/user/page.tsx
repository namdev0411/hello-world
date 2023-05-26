export default function () {
  return (
    <div className="h-screen">
      <div className="flex justify-end">
        <button
          className="
            rounded-md
            py-2 
            px-5 
            text-xs
            font-bold 
            border-[#000] 
            border 
            hover:bg-[#000] 
            hover:text-[#fff]
          "
        >
          アカウントを新規登録
        </button>
      </div>
      <div
        className="
          bg-[#999]
          h-screen
          w-screen
          fixed
          top-0
          left-0
          opacity-80
        "
      >
        <div
          className="
            bg-[#fff]
            rounded-2xl
            border-[#000] 
            border 
            h-[85%]
            w-3/4
            fixed
            top-2/4
            left-2/4
            translate-x-[-50%]
            translate-y-[-50%]
          "
        >
          <div className="h-[10%] p-4">
            <div className="flex justify-between text-xs">
              <h3>新規ユーザー追加</h3>
              <div>✖</div>
            </div>
          </div>
          <div className="h-[80%] p-4">form-content</div>
          <div className="h-[10%] border-t-[#000] border-t">
            <div className="flex justify-between px-20 items-center h-full">
              <button className="py-3 px-6">やめる</button>
              <button className="bg-[#000] text-[#fff] py-3 px-6 rounded-md">
                登録する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
