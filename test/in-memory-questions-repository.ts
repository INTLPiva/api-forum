import { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository";
import { Question } from "@/domain/forum/enterprise/entities/question";

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = [];

  async findBySlug(slug: string) {
    const quesiton = this.items.find((item) => item.slug.value === slug);

    if (!quesiton) {
      return null;
    }

    return quesiton;
  }

  async create(question: Question) {
    this.items.push(question);
  }
}
