export const fetchRecipeForIngredient = async (ingredient) => {
    try {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.meals || [];
    } catch (err) {
      console.error('TheMealDB API 호출 오류:', err);
      return [];
    }
  };
  
  export const fetchRecipeDetail = async (idMeal) => {
    try {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.meals[0]; // 첫 번째 레시피 상세 정보 반환
    } catch (err) {
      console.error('레시피 상세 정보 호출 중 오류 발생:', err);
      return null;
    }
  };
  