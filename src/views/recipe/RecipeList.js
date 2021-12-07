import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FormGroup, Input, Label, Table } from 'reactstrap';
import Banner from '../../assets/images/banner-recipe.png';
import recipe from '../../assets/images/recipes/recipe.png';

function RecipeList(props) {

    const [recipeList,setRecipeList] = useState([])
    //레시피 리스트를 받아옵니다.
    useEffect(()=>{
        axios.get('/listRecipe.do')
        // post 보내고 나서 실행
        .then((res)=>{
            console.log('레시피리스트')
            console.log(res.data.getlist)
            setRecipeList(res.data.getlist)
        })
        .catch(err =>{alert('실패')})
    },[])
    const listComponent = recipeList.map((item) =>(
        <div>
            <figure>
                <img src={item.recipe_thumbnail} alt="레시피 이미지" />
            </figure>
            <div>
                <h4>{item.recipe_title}</h4>
                {/* 별점 */}
                <p className="text-trunc">
                    {item.recipe_content}
                </p>
                <span><a>요리왕김다밍</a>님</span>
            </div>
        </div>
    ))
    return (
        <main>
            <section className="sec-banner">
                <img src={Banner} alt="레시피 - 요리조리 회원들의 노하우가 담긴 레시피" />
            </section>
            <div className="recipes-wrap">
                <section className="sec-filter">
                    <div className="search-box">
                        <div>
                            <input type="search" placeholder="레시피 찾기" />
                            <label><i className="fa fa-search" aria-hidden="true"></i></label>
                        </div>
                    </div>
                    <div className="list-filter">
                        <i className="arrow left">이전</i>
                        <ul>
                            <li className="cuisine-kr">
                                한식
                                <div></div>
                            </li>
                            <li className="cuisine-ch">중식</li>
                            <li className="cuisine-western">양식</li>
                            <li className="cuisine-jp">일식</li>
                            <li className="cuisine-snack">분식</li>
                            <li className="cuisine-veg">채식</li>
                            <li className="cuisine-bizzare">괴식</li>
                        </ul>
                        <i className="arrow right">다음</i>
                    </div>
                </section>
                <section className="sec-recipes">
                    {/* 레시피 1 */}
                    <div>
                        <div className="checkboxes">
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" className="checkbox"/>
                                    구독 레시피
                                    <span className="form-check-sign">
                                    <span className="check"></span>
                                    </span>
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" className="checkbox"/>
                                    관심 레시피
                                    <span className="form-check-sign">
                                    <span className="check"></span>
                                    </span>
                                </Label>
                            </FormGroup>
                        </div>
                        <FormGroup className="selectbox">
                            <Input type="select" name="filter" id="filter">
                                <option>추천 순</option>
                                <option>별점 순</option>
                                <option>최다 댓글 순</option>
                                <option>최근 등록일 순</option>
                            </Input>
                        </FormGroup>
                    </div>
                    <div className="recipes">
                        <div className="recipe">
                            {listComponent}
                            {/* TODO : 페이지 내역에 따른 RecipeCard 노출 타입을 설정 후 전달 */}
                            <div>
                                <figure>
                                    <img src={recipe} alt="레시피 이미지" />
                                </figure>
                                <div>
                                    <h4>블루베리 요거트1</h4>
                                    {/* 별점 */}
                                    <p className="text-trunc">
                                        맛이 없을 수 없는 싱싱한 블루베리에다
                                        요거트를 얹으면? 이것도 못 만들면 정말
                                        이상하죠. 그럼 요리 못하시는 거예요 완전 미친거 아니냐고요
                                    </p>
                                    <span><a>요리왕김다밍</a>님</span>
                                </div>
                            </div>
                        </div>

                         {/* dummy datas */}

                            <div className="recipe">
                            {/* TODO : 페이지 내역에 따른 RecipeCard 노출 타입을 설정 후 전달 */}
                            <div>
                                <figure>
                                    <img src={recipe} alt="레시피 이미지" />
                                </figure>
                                <div>
                                    <h4>블루베리 요거트</h4>
                                    {/* 별점 */}
                                    <p className="text-trunc">
                                        맛이 없을 수 없는 싱싱한 블루베리에다
                                        요거트를 얹으면? 이것도 못 만들면 정말
                                        이상하죠. 그럼 요리 못하시는 거예요 완전 미친거 아니냐고요
                                    </p>
                                    <span><a>요리왕김다밍</a>님</span>
                                </div>
                            </div>
                        </div>
                            <div className="recipe">
                            {/* TODO : 페이지 내역에 따른 RecipeCard 노출 타입을 설정 후 전달 */}
                            <div>
                                <figure>
                                    <img src={recipe} alt="레시피 이미지" />
                                </figure>
                                <div>
                                    <h4>블루베리 요거트</h4>
                                    {/* 별점 */}
                                    <p className="text-trunc">
                                        맛이 없을 수 없는 싱싱한 블루베리에다
                                        요거트를 얹으면? 이것도 못 만들면 정말
                                        이상하죠. 그럼 요리 못하시는 거예요 완전 미친거 아니냐고요
                                    </p>
                                    <span><a>요리왕김다밍</a>님</span>
                                </div>
                            </div>
                        </div>
                            <div className="recipe">
                            {/* TODO : 페이지 내역에 따른 RecipeCard 노출 타입을 설정 후 전달 */}
                            <div>
                                <figure>
                                    <img src={recipe} alt="레시피 이미지" />
                                </figure>
                                <div>
                                    <h4>블루베리 요거트</h4>
                                    {/* 별점 */}
                                    <p className="text-trunc">
                                        맛이 없을 수 없는 싱싱한 블루베리에다
                                        요거트를 얹으면? 이것도 못 만들면 정말
                                        이상하죠. 그럼 요리 못하시는 거예요 완전 미친거 아니냐고요
                                    </p>
                                    <span><a>요리왕김다밍</a>님</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <Table>
                <thead>
                    <tr><th>#</th><th>유형</th><th>제목</th></tr>
                </thead>
                <tbody>
                    {recipeComponent}
                </tbody>
            </Table> */}
        </main>
    );
}
export default RecipeList;