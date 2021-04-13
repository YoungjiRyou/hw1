
텅 빈 보드판(x*y)을 만들어야 되고
cell에 지뢰(z)를 심자

cell에 이벤트를 걸자
* 클릭
* 우클릭

cells -> 사각형
        [
        [{dom, mine}, {dom, mine}...]
        [{dom, mine}, {dom, mine}...]
        [{dom, mine}, {dom, mine}...]
]


##functions

- cellClick : 클릭할 때 반응할 함수
- cellRightClick : 우클릭할 때 반응할 함수
- countNearByMines(cell) : 주위 지뢰가 몇 개 있는지 알려줄 함수
- init(x,y,z)
- dead()
- victory()

...