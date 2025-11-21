import { AnswerQuestionUseCase } from "./answer-question";
import { InMemoryAnswersRepository } from "test/in-memory-answers-repository";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: AnswerQuestionUseCase;

describe("Create Answer", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository);
  });

  it("should be able to create an answer", async () => {
    const { answer } = await sut.execute({
      instructorId: "1",
      questionId: "1",
      content: "Conteúdo da resposta",
    });

    expect(answer.id).toBeTruthy();
    expect(inMemoryAnswersRepository.items).toHaveLength(1);
    expect(inMemoryAnswersRepository.items[0]).toEqual(answer);
  });
});
